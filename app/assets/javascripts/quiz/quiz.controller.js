(function() {

    'use strict'

    QuizController.$inject = ['QuizFactory']

    function QuizController(QuizFactory) {
        var vm = this;
        var numQuestionsAnswered = 0

        // vm Variables
        vm.questions = QuizFactory.quizQuestions()
        vm.activeQuestionIndex = 0;
        vm.activeQuestion = vm.questions[0]

        // Callable Methods
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;

        // instatiated Functions

        // Defined Methods

        function setActiveQuestion() {
            var breakOut = false;
            var quizLengthIndexed = vm.questions.length - 1

            // Loop through questions until all answered
            while (!breakOut) {
                // Check if activeQuestion is less than length of quizz
                // increment by 1 if it is, reset to first question if is not
                vm.activeQuestionIndex = vm.activeQuestionIndex < quizLengthIndexed ? ++vm.activeQuestionIndex : 0;
                // Update Active Question
                vm.activeQuestion = vm.questions[vm.activeQuestionIndex]
                    // if find Unanswered question stop
                if (vm.activeQuestion.answered === null) {
                    breakOut = true;
                }
            }
        }

        function questionAnswered() {
            var quizLength = vm.questions.length

            // if current question is answered move onto the next
            if (vm.activeQuestion.answered !== null) {
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
