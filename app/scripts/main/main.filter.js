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
            var filtered = [],
                notFiltered= [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.tags.indexOf("#course:main_courses") != -1) {
                    filtered.push(item);
                } else {
                    notFiltered.push(item);
                }
            }
            return course == "main" ? filtered : notFiltered;
        };
    }
})();
