(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.header.controller:HeaderCtrl
     * @description
     * # HeaderCtrl
     * Header controller of the jstest App
     */
    angular
        .module('jstestApp.header')
        .controller('HeaderCtrl', HeaderCtrl);

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

