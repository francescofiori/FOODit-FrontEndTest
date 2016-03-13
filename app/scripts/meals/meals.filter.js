(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.controller:MealsCtrl
     * @description
     * # MealsCtrl
     * Controller for meal list
     */
    angular
        .module('jstestApp.meals')
        .filter('wordFilter', wordFilter);

    function wordFilter() {
        return function(input) {
            return input.split('.')[0] + ".";
        };
    }
})();
