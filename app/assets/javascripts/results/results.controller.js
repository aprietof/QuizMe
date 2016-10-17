(function() {

    'use strict'

    ResultsController.$inject = ['QuizFactory']

    function ResultsController(QuizFactory) {

        var vm = this;

        // vm Variables
        vm.answeredQuestions = QuizFactory.answeredQuestions
        vm.activeResults = QuizFactory.finalize // true
        vm.correctAnswers = 0
        vm.activeQuestionIndex = 0
        vm.activeQuestion = vm.answeredQuestions[vm.activeQuestionIndex] // First

        // Callable Methods
        vm.checkResults = checkResults;
        vm.setActiveQuestion = setActiveQuestion;
        vm.getAnswerClass = getAnswerClass;

        // instatiated Functions
        checkResults()

        // Defined Methods

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

        }

        function getAnswerClass(index) {
            if (index !== vm.activeQuestion.answer && index === vm.activeQuestion.answered) {
                return "answer-danger"
            } else if (index === vm.activeQuestion.answer) {
                return "answer-success"
            }
        }


    }

    angular
        .module('app')
        .controller('ResultsController', ResultsController)

}());
