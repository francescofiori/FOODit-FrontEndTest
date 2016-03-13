(function () {
    'use strict';

    angular
        .module('jstestApp.core')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['MenuService'];
    /* @ngInject */
    function MainCtrl(MenuService) {
        var vm = this;

        vm.menu = {};

        activate();

        function activate() {
            MenuService.get('/data/menu.json').success(function(data) {
                vm.menu = data;
            });
        }
    }
})();

