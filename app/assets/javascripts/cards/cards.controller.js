(function() {

    'use strict'

    function CardsController(CardsFactory) {
        var vm = this;

        // vm Variables
        vm.cardsData = []
        vm.activeCard = {};
        vm.search = '';

        // Callable Methods
        vm.changeActiveCard = changeActiveCard;
        vm.getCardsData = getCardsData;

        // instatiated Functions
        getCardsData()

        // Defined Methods
        function changeActiveCard(card) {
            vm.activeCard = card
        }

        function getCardsData() {
            return vm.cardsData = CardsFactory.cardsData()
        }
    }

    angular
        .module('app')
        .controller('CardsController', CardsController)
}());
