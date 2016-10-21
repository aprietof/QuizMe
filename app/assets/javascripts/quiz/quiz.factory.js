(function() {

    'use strict'

    function QuizFactory($http) {
        return {
            getQuizzes: getQuizzes,
            currentQuizId: 0,
            finalize: false,
            numQuestionsAnswered: 0,
            activeQuestionIndex: 0,
            answeredQuestions: []
        }

        function getQuizzes() {
            return $http.get('/quizzes')
                .then(handleResponse)
                .catch(handleError)
        }

        // Handle $http responses

        function handleResponse(response) {
            return response.data
        }

        function handleError(error) {
            console.log(error);
        }

    }

    angular
        .module('app')
        .factory('QuizFactory', QuizFactory)

}());
