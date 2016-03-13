(function() {
    'use strict';

    angular
        .module('jstestApp.header')
        .directive('appHeader', appHeader);

    /* @ngInject */
    function appHeader () {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/header/header.template.html'
        };

        return directive;
    }
})();
