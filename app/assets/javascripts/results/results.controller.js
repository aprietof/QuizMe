(function() {

    'use strict'

    ResultsController.$inject = ['QuizFactory']

    function ResultsController(QuizFactory) {

        var vm = this;

        // Scroll to top
        window.scrollTo(0, 0);

        // vm Variables
        vm.currentQuizId = QuizFactory.currentQuizId
        vm.answeredQuestions = QuizFactory.answeredQuestions
        vm.activeResults = QuizFactory.finalize // true
        vm.correctAnswers = 0
        vm.activeQuestionIndex = 0
        vm.activeQuestion = vm.answeredQuestions[vm.activeQuestionIndex] // First

        // Callable Methods
        vm.checkResults = checkResults;
        vm.setActiveQuestion = setActiveQuestion;
        vm.getAnswerClass = getAnswerClass;
        vm.score = score;
        vm.endQuiz = endQuiz

        // instatiated Functions
        checkResults()

        // ################### Defined Methods ################### //

        function checkResults() {
            // Loop through questions and check for correct answers
            for (var i = 0; i < vm.answeredQuestions.length; i++) {
                if (vm.answeredQuestions[i].answer === vm.answeredQuestions[i].answered) {
                    // if correct flag question as correct true
                    vm.answeredQuestions[i].correct = true;
                    // then increment number of correct answers
                    vm.correctAnswers++;
                }
            }
        }

        function setActiveQuestion(index) {
            // Update active question according to button index
            vm.activeQuestion = vm.answeredQuestions[index]
        }

        function getAnswerClass(index) {
            // Assign class acording to answer
            if (index !== vm.activeQuestion.answer && index === vm.activeQuestion.answered) {
                // if answer incorrect return class name 'answer-danger'
                return "answer-danger"
            } else if (index === vm.activeQuestion.answer) {
                // if answer incorrect return class name 'answer-success'
                return "answer-success"
            }
        }

        function score() {
            // Returns score based on correct answers as a float
            return ((vm.correctAnswers / vm.answeredQuestions.length) * 100)
        }

        function endQuiz() {
            QuizFactory.finalize = false;
        }

    }

    angular
        .module('app')
        .controller('ResultsController', ResultsController)

}());
