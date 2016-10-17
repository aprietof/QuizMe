(function() {

    'use strict'

    ResultsController.$inject = ['QuizFactory']

    function ResultsController(QuizFactory) {

        var vm = this;

        // vm Variables
        vm.answeredQuestions = QuizFactory.answeredQuestions
        vm.correctAnswers = 0

        // Callable Methods
        vm.checkResults = checkResults;

        // instatiated Functions
        checkResults()

        // Defined Methods
        function checkResults() {
            for (var i = 0; i < vm.answeredQuestions.length; i++) {
                if (vm.answeredQuestions[i].answer === vm.answeredQuestions[i].answered) {
                    vm.answeredQuestions[i].correct = true;
                    vm.correctAnswers++;
                }
            }
            return vm.answeredQuestions
        }


    }

    angular
        .module('app')
        .controller('ResultsController', ResultsController)

}());
