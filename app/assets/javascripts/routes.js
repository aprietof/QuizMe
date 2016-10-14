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
                .state('home.list', {
                    url: '/list',
                    templateUrl: 'list/list.html',
                    controller: 'ListController as vm'
                })
                .state('home.quiz', {
                    url: '/quiz',
                    templateUrl: 'quiz/quiz.html',
                    controller: 'QuizController as vm'
                })
                .state('home.results', {
                    url: '/results',
                    templateUrl: 'results/results.html',
                    controller: 'ResultsController as vm'
                });
            $urlRouterProvider.otherwise('/')
        });
}());
