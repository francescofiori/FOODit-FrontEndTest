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
        .module('jstestApp.main')
        .filter('courseFilter', courseFilter);

    function courseFilter() {
        return function(items, course) {
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.tags.indexOf(course) != -1) {
                    filtered.push(item);
                }
            }
            return filtered;
        };
    }
})();
