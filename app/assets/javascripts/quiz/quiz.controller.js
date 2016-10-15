(function() {

    'use strict'

    function QuizController(QuizFactory) {
        var vm = this;

        getQuestions();

        function getQuestions() {
            return vm.questions = QuizFactory.quizQuestions()
        }

    }

    angular
        .module('app')
        .controller('QuizController', QuizController)

}());
