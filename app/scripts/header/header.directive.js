(function() {
    'use strict';

    angular
        .module('jstestApp.header')
        .directive('appHeader', appHeader);

    /* @ngInject */
    function appHeader () {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/header/header.template.html',
            controller: HeaderCtrl,
            controllerAs: 'headerC',
            bindToController: true // because the scope is isolated
        };

        return directive;
    }

    HeaderCtrl.$inject = ['CartService'];
    /* @ngInject */
    function HeaderCtrl(CartService) {
        var vm = this;
        vm.addToCart = addToCart;
        vm.removeFromCart = removeFromCart;

        function addToCart (meal) {
            CartService.addToCart(meal);
        }

        function removeFromCart (meal) {
            CartService.removeFromCart(meal);
        }
    }
})();
