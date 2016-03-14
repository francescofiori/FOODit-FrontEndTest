(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.meals.directive:meals
     * @description
     * # meals
     * meals directive of the jstest App
     */
    angular
        .module('jstestApp.meals')
        .directive('meals', meals);

    function meals() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/meals/meals.template.html'
        };

        return directive;
    }
})();
