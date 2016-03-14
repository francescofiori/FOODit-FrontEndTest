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
            templateUrl: '/scripts/header/header.template.html'
        };

        return directive;
    }
})();
