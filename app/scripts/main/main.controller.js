(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.main.controller:MainCtrl
     * @description
     * # MainCtrl
     * Main controller of the jstest App
     */
    angular
        .module('jstestApp.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['MenuService', 'CartService'];
    /* @ngInject */
    function MainCtrl(MenuService, CartService) {
        var vm = this;

        vm.menu = {};

        activate();

        function activate() {
            getMenuItems();
            getCart();
        }

        function getMenuItems() {
            MenuService.get('/data/menu.json').success(function(data) {
                vm.menu = data;
            });
        }

        function getCart() {
            vm.cart = CartService.getCartFromCookie();
        }
    }
})();

