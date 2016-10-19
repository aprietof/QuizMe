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
                text: "Who said: Chandler does still think I'm pregnant. He hasn't asked me how I'm feeling or offered to carry my bags. I feel bad for the woman who ends up with him.?",
                possibilities: [{
                    answer: "Rachel"
                }, {
                    answer: "Monica"
                }, {
                    answer: "Phebe"
                }, {
                    answer: "Janice"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 2
            }, {
                type: "text",
                text: "Who said: All right, look if you absolutely have to tell her the truth, at least wait until the timing's right. And that's what deathbeds are for.?",
                possibilities: [{
                    answer: "Chandler"
                }, {
                    answer: "Joey"
                }, {
                    answer: "Ross"
                }, {
                    answer: "Gunther"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 0
            }, {
                type: "text",
                text: "Who said: Oh, yeah, I'm a gym member. I try to go four times a week, but I've missed the last... Twelve hundred times.?",
                possibilities: [{
                    answer: "Gunther"
                }, {
                    answer: "Ross"
                }, {
                    answer: "Joey"
                }, {
                    answer: "Chandler"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 3
            }, {
                type: "text",
                text: "Who said: You know, we should probably ask the doctor if she even knows how to deliver a baby that's half human, half *pure evil*! ",
                possibilities: [{
                    answer: "Frank Jr"
                }, {
                    answer: "Ross"
                }, {
                    answer: "Chandler"
                }, {
                    answer: "Joey"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 1
            }, {
                type: "text",
                text: "Who said: Guys can fake it ? Unbelievable! The one thing that's ours!",
                possibilities: [{
                    answer: "Rachel"
                }, {
                    answer: "Janice"
                }, {
                    answer: "Monica"
                }, {
                    answer: "Phebe"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 2
            }, {
                type: "text",
                text: "Monica: My motto is get out before they go down. Who responded: 'That is so not my motto.'?",
                possibilities: [{
                    answer: "Joey"
                }, {
                    answer: "Ross"
                }, {
                    answer: "Jack"
                }, {
                    answer: "Chandler"
                }],
                answered: null,
                selected: false,
                correct: false,
                answer: 0
            }];
        }

    }

    angular
        .module('app')
        .factory('QuizFactory', QuizFactory)

}());
