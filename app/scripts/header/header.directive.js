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
        console.log('ciao');

        vm.addToCart = addToCart;

        function addToCart (meal) {
            CartService.addToCart(meal);
        }
    }
})();
