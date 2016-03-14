(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.meals.filter:wordFilter
     * @description
     * # wordFilter
     * Filter for cutting meals' descriptions
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
