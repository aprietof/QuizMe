(function() {

    'use strict'

    function QuizController(QuizFactory) {
        var vm = this;
        var numQuestionsAnswered = 0

        // instatiated Functions
        getQuestions();

        // vm Variables
        vm.activeQuestionIndex = 0;
        vm.activeQuestion = vm.questions[vm.activeQuestionIndex]

        // Callable Methods
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;

        // Defined Methods

        function getQuestions() {
            // Asigns an array of questions to vm.questions
            return vm.questions = QuizFactory.quizQuestions()
        }

        function setActiveQuestion() {
            var breakOut = false;
            var quizLengthIndexed = vm.questions.length - 1

            // Loop through questions until all answered
            while (!breakOut) {
                // Check if activeQuestion is less than length of quizz
                // increment by 1 if it is, reset to first question if is not
                vm.activeQuestionIndex = vm.activeQuestionIndex < quizLengthIndexed ? ++vm.activeQuestionIndex : 0;
                if (vm.activeQuestion.selected === null) {
                    // Unanswered question found
                    breakOut = true;
                }
            }
        }

        function questionAnswered() {
            var quizLength = vm.questions.length

            // if current question is answered move onto the next
            if (vm.activeQuestion.selected !== null) {
                numQuestionsAnswered++
                // Check if all questions have been answered
                if (numQuestionsAnswered >= quizLength) {
                    // Finalize Quiz
                }
            }
            vm.setActiveQuestion()
        }

    }

    angular
        .module('app')
        .controller('QuizController', QuizController)

}());
