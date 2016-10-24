(function() {

    'use strict'

    function QuestionFactory($http) {
        return {
            getQuestions: getQuestions,
            createQuestion: createQuestion
        }

        function getQuestions() {
            return $http.get('/questions')
                .then(handleResponse)
                .catch(handleError)
        }

        function createQuestion(question) {
            var req = {
                method: 'POST',
                url: '/questions',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                data: {
                    question: question
                }
            }
            return $http(req)
                .catch(handleError)
        }

        // Handle $http responses

        function handleResponse(response) {
            console.log(response.data);
            return response.data
        }

        function handleError(error) {
            console.log(error);
        }

    }

    angular
        .module('app')
        .factory('QuestionFactory', QuestionFactory)

}());
