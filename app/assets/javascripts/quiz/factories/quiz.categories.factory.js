(function() {

    'use strict'

    function CategoriesFactory($http) {
        return {
            getCategories: getCategories,
        }

        function getCategories() {
            return $http.get('/categories')
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
        .factory('CategoriesFactory', CategoriesFactory)

}());
