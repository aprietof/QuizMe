(function() {

    'use strict'

    QuizzesController.$inject = ['QuizFactory']

    function QuizzesController(QuizFactory) {

        var vm = this;

        // instatiated Functions
        activate();

        //  Defined Methods

        // INDEX
        function getQuizzes() {
            return QuizFactory.getQuizzes()
                .then(setQuizzes)
        }

        function setQuizzes(data) {
            return vm.quizzes = data
        }

        // On load Functions
        function activate() {
            getQuizzes();
        }


    }

    angular
        .module('app')
        .controller('QuizzesController', QuizzesController)

}());
