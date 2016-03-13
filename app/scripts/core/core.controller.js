(function () {
    'use strict';

    angular
        .module('jstestApp.core')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['MenuService', 'CartService'];
    /* @ngInject */
    function MainCtrl(MenuService, CartService) {
        var vm = this;

        vm.menu = {};

        activate();

        function activate() {
            MenuService.get('/data/menu.json').success(function(data) {
                vm.menu = data;
            });
            vm.cart = CartService.getCartFromCookie();
        }
    }
})();

