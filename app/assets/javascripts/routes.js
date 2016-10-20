(function() {

    'use strict'

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.cards', {
                    url: 'cards',
                    templateUrl: 'cards/cards.html',
                    controller: 'CardsController as vm'
                })
                .state('home.quizzes', {
                    url: 'quizzes',
                    templateUrl: 'quiz/quizzes.html',
                    controller: 'QuizController as vm'
                })
                .state('home.quiz', {
                    url: 'quiz',
                    templateUrl: 'quiz/quiz.html',
                    controller: 'QuizController as vm'
                })
                .state('home.results', {
                    url: 'results',
                    templateUrl: 'results/results.html',
                    controller: 'ResultsController as vm'
                })
                .state('card', {
                    url: '/card/:id',
                    templateUrl: 'card/card.html',
                    controller: 'ListController as vm'
                });
            // .state('user', {
            //     // Add Configuration Object
            //     url: '/user/:id',
            //     templateUrl: 'views/user.html',
            //     controller: 'UserController as vm',
            //     // Fetch Data
            //     resolve: {
            //         // Pass $http and $statPparams as arguments
            //         user: function functionName($http, $stateParams) {
            //             // Return response Data passing a dinamic Url
            //             return $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.id);
            //         }
            //     }
            // });
            $urlRouterProvider.otherwise('/')
        });
}());
