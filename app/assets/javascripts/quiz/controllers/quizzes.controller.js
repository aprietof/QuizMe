(function() {

    'use strict'

    QuizzesController.$inject = ['QuizFactory', 'QuestionFactory']

    function QuizzesController(QuizFactory, QuestionFactory) {

        var vm = this;

        vm.messages = false
        vm.indexMode = true
        vm.createMode = false
        vm.editMode = false
        vm.quizzAdded = false

        // vm callable functions
        vm.activate = activate;
        vm.addQuiz = addQuiz;
        vm.createQuiz = createQuiz;
        vm.createQuestion = createQuestion;

        // instatiated Functions
        activate();

        //  Defined Methods

        // *** INDEX PAGE DISPLAY ALL QUIZZES ***

        function getQuizzes() {
            return fetchQuizzes()
                .then(setQuizzes)
        }

        function fetchQuizzes() {
            // Fetch quizzes array from DB
            return QuizFactory.getQuizzes()
        }

        function setQuizzes(data) {
            // Set fetched quizzes objects array into vm.quizzes
            return vm.quizzes = data
        }

        // *** CREATE NEW QUIZ ***

        function addQuiz() {
            // Switch from index mode to create mode
            vm.indexMode = false
            vm.createMode = true
        }

        function createQuiz() {
            // Create quiz in DB
            return QuizFactory.createQuiz(vm.newQuiz)
                // after creating a quiz get last quiz
                .then(getLastQuiz)
        }

        function getLastQuiz() {
            return fetchQuizzes()
                .then(setLastQuiz)
        }

        function setLastQuiz(data) {
            // Clear vm.newQuiz
            vm.newQuiz = {};
            // Switch from create mode to edit mode (add questions)
            vm.createMode = false;
            vm.editMode = true;
            // Return last quiz created
            return vm.lastQuiz = data[data.length - 1]
        }

        function createQuestion() {
            // Set newQuestion quiz_id to last quiz created id
            vm.newQuestion.quiz_id = vm.lastQuiz.id;
            // Create question in DB
            return QuestionFactory.createQuestion(vm.newQuestion)
                .then(clearQuestion)
        }

        function clearQuestion() {
            // set messages to true
            vm.messages = true;
            // Clear newQuestion model
            vm.newQuestion = {};
            // set messages to false after 1 second
            setTimeout(function() {
                vm.messages = false
            }, 1000);
        }

        function reset() {
            // Reset all settings to initial state
            vm.indexMode = true
            vm.createMode = false
            vm.editMode = false
            vm.quizzAdded = false;
            // Broadcast quiz has been initialize
            QuizFactory.finalize = false;
        }

        // On load Functions
        function activate() {
            getQuizzes();
            reset();
        }

    }

    angular
        .module('app')
        .controller('QuizzesController', QuizzesController)

}());
