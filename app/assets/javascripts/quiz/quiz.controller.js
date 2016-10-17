(function() {

    'use strict'

    QuizController.$inject = ['QuizFactory']

    function QuizController(QuizFactory) {

        var vm = this;
        var numQuestionsAnswered = QuizFactory.numQuestionsAnswered // 0

        // vm Variables
        vm.questions = QuizFactory.quizQuestions()
        vm.activeQuestionIndex = QuizFactory.activeQuestionIndex;
        vm.activeQuestion = vm.questions[0]
        vm.error = false
        vm.finalize = QuizFactory.finalize // false

        // Callable Methods
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.switchQuestion = switchQuestion;
        vm.finalizeAnswers = finalizeAnswers;

        // instatiated Functions


        // Defined Methods

        function setActiveQuestion() {

            var breakOut = false;
            var quizLengthIndexed = vm.questions.length - 1;

            // Loop through questions until all answered
            while (!breakOut) {
                // Check if activeQuestion is less than length of quizz
                // increment by 1 if it is, reset to first question if is not
                vm.activeQuestionIndex = vm.activeQuestionIndex < quizLengthIndexed ? ++vm.activeQuestionIndex : 0;
                // if sent back to begining warn user
                if (vm.activeQuestionIndex === 0) {
                    vm.error = true;
                }
                // Update Active Question
                vm.activeQuestion = vm.questions[vm.activeQuestionIndex];
                // Stop looping if active question is unanswered
                if (vm.activeQuestion.answered === null) {
                    breakOut = true;
                }
            }
        }

        function questionAnswered() {
            var quizLength = vm.questions.length
                // if current question is answered move onto the next
            if (vm.activeQuestion.answered !== null) {
                numQuestionsAnswered++
                // Check if all questions have been answered
                if (numQuestionsAnswered >= quizLength) {
                    // Finalize Quiz
                    for (var i = 0; i < quizLength.length; i++) {
                        // if there is a question unanswered send to that question
                        if (vm.questions[i].answered === null) {
                            switchQuestion(i);
                            return;
                        }
                    }
                    vm.error = false;
                    vm.finalize = true;
                    return
                }
            }
            setActiveQuestion()
        }

        function selectAnswer(index) {
            // Assigns index value as answered value of active question
            vm.activeQuestion.answered = index;
        }

        function switchQuestion(index) {
            // Reassigns index question based on clicked icon index
            vm.activeQuestionIndex = index;
            // Update Active Question
            vm.activeQuestion = vm.questions[vm.activeQuestionIndex]
        }

        function finalizeAnswers() {
            QuizFactory.resetVariables()
            QuizFactory.answeredQuestions = vm.questions
        }

    }

    angular
        .module('app')
        .controller('QuizController', QuizController)

}());
