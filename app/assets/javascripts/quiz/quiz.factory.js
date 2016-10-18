(function() {

    'use strict'

    function QuizFactory() {
        return {
            quizQuestions: quizQuestions,
            finalize: false,
            numQuestionsAnswered: 0,
            activeQuestionIndex: 0,
            answeredQuestions: []
        }

        function quizQuestions() {
            return [{
                type: "text",
                text: "How much can a loggerhead weigh?",
                possibilities: [{
                    answer: "Up to 20kg"
                }, {
                    answer: "Up to 115kg"
                }, {
                    answer: "Up to 220kg"
                }, {
                    answer: "Up to 500kg"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 1
            }, {
                type: "text",
                text: "What is the typical lifespan of a Green Sea Turtle?",
                possibilities: [{
                    answer: "150 years"
                }, {
                    answer: "10 years"
                }, {
                    answer: "80 years"
                }, {
                    answer: "40 years"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 2
            }, {
                type: "text",
                text: "Where does the Kemp's Ridley Sea Turtle live?'",
                possibilities: [{
                    answer: "Tropical waters all around the world"
                }, {
                    answer: "Eastern Australia"
                }, {
                    answer: "Coastal North Atlantic"
                }, {
                    answer: "South pacific islands"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 2
            }, {
                type: "text",
                text: "What is the most common turtle in US waters?",
                possibilities: [{
                    answer: "Loggerhead turtle"
                }, {
                    answer: "Leatherback turtle"
                }, {
                    answer: "Hawksbill Turtle"
                }, {
                    answer: "Alligator Snapping Turtle"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 0
            }, {
                type: "text",
                text: "What is the largest sea turtle on earth?",
                possibilities: [{
                    answer: "Eastern Snake Necked Turtle"
                }, {
                    answer: "Olive Ridley Sea Turtle"
                }, {
                    answer: "Kemp's Ridley Sea Turtle'"
                }, {
                    answer: "Leatherback"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 3
            }, {
                type: "text",
                text: "Which of these turtles are herbivores?",
                possibilities: [{
                    answer: "Loggerhead Turtle"
                }, {
                    answer: "Hawksbill Turtle"
                }, {
                    answer: "Leatherback Turtle"
                }, {
                    answer: "Green Turtle"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 3
            }];
        }

    }

    angular
        .module('app')
        .factory('QuizFactory', QuizFactory)

}());
