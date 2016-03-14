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
        vm.cart = {};
        vm.cartHasMainItems = cartHasMainItems;
        vm.cartHasOtherItems = cartHasOtherItems;
        vm.cartHasItems = cartHasItems;

        activate();

        function activate() {
            getMenuItems();
            getCart();
        }

        function getMenuItems() {
            MenuService.get().success(function(data) {
                vm.menu = data;
            });
        }

        function getCart() {
            vm.cart = CartService.getCartFromCookie();
        }

        function cartHasMainItems() {
            return vm.cart.mainCount > 0
        }

        function cartHasOtherItems() {
            return vm.cart.otherCount > 0
        }

        function cartHasItems() {
            return vm.cart.items.length > 0
        }
    }
})();

