(function () {
    'use strict';

    angular
        .module('jstestApp.core')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'MenuService'];
    /* @ngInject */
    function MainCtrl($scope, MenuService) {
        var vm = this;

        $scope.menu = {};

        activate();

        function activate() {
            console.log('ciao');
            MenuService.get('/data/menu.json').success(function(data) {
                $scope.menu = data;
            });
        }
    }
})();

