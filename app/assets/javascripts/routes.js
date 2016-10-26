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
                .state('home.quizzes', {
                    url: 'quizzes',
                    templateUrl: 'quiz/quizzes.html',
                    controller: 'QuizzesController as vm'
                })
                .state('home.quiz', {
                    url: 'quizzes/:id',
                    templateUrl: 'quiz/quiz.html',
                    controller: 'QuizController as vm',
                    resolve: {
                        quiz: function($http, $stateParams) {
                            return $http.get('/quizzes/' + $stateParams.id);
                        }
                    }
                })
                .state('home.learn', {
                    url: 'quizzes/:id/learn',
                    templateUrl: 'quiz/learn.html',
                    controller: 'QuizController as vm',
                    resolve: {
                        quiz: function($http, $stateParams) {
                            return $http.get('/quizzes/' + $stateParams.id);
                        }
                    }
                })
                .state('home.results', {
                    url: 'results',
                    templateUrl: 'results/results.html',
                    controller: 'ResultsController as vm'
                });
            $urlRouterProvider.otherwise('quizzes')
        });
}());
