(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.header.directive:appHeader
     * @description
     * # appHeader
     * Header directive of the jstest App
     */
    angular
        .module('jstestApp.header')
        .directive('appHeader', appHeader);

    function appHeader () {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/header/header.template.html',
            controller: HeaderCtrl,
            controllerAs: 'headerC',
            bindToController: true
        };

        return directive;
    }

    HeaderCtrl.$inject = ['CartService'];
    /* @ngInject */
    function HeaderCtrl(CartService) {
        var vm = this;
        vm.addToCart = addToCart;
        vm.removeFromCart = removeFromCart;
        vm.confirmOrder = confirmOrder;

        function addToCart (meal) {
            CartService.addToCart(meal);
        }

        function removeFromCart (meal) {
            CartService.removeFromCart(meal);
        }

        function confirmOrder () {
            alert("Your order has been confirmed!");
        }
    }
})();
