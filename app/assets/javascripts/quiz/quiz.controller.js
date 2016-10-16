(function() {

    'use strict'

    function QuizController(QuizFactory) {
        var vm = this;

        // vm Variables
        vm.activeQuestionIndex = 0;

        // Callable Methods
        vm.questionAnswered = questionAnswered;

        // instatiated Functions
        getQuestions();

        // Defined Methods
        function getQuestions() {
            return vm.questions = QuizFactory.quizQuestions()
        }

        function questionAnswered() {

        }

    }

    angular
        .module('app')
        .controller('QuizController', QuizController)

}());
