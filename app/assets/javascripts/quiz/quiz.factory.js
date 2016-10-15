(function() {

    'use strict'

    function QuizFactory() {
        return {
            name: "Adrian"
        }
    }

    angular
        .module('app')
        .factory('QuizFactory', QuizFactory)

}());
