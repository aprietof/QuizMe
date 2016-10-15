(function() {

    'use strict'

    function QuizController(QuizFactory) {
        var vm = this;

        vm.guy = QuizFactory.name;

    }

    angular
        .module('app')
        .controller('QuizController', QuizController)

}());
