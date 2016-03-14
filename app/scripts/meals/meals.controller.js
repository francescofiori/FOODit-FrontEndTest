(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.meals.controller:MealsCtrl
     * @description
     * # MealsCtrl
     * Controller for meal list
     */
    angular
        .module('jstestApp.meals')
        .controller('MealsCtrl', MealsCtrl);

    MealsCtrl.$inject = ['CartService'];
    /* @ngInject */
    function MealsCtrl(CartService) {
        var vm = this,
            tagsWithImg = ["charcoal", "cheese", "chicken", "grilled", "high-protein", "lamb", "pasta", "peanut", "pork", "seafood", "snack", "spicy", "starter", "sweet", "vegetarian"];

        vm.addToCart = addToCart;
        vm.checkTags = checkTags;
        vm.checkTagContainer = checkTagContainer;

        function addToCart(meal) {
            CartService.addToCart(meal);
        }

        function checkTags(tags, tag) {
            return tags.indexOf(tag) != -1;
        }

        function checkTagContainer(tags) {
            var found = false;
            angular.forEach(tagsWithImg, function (tag) {
                if (tags.indexOf(tag) != -1) {
                    found = true;
                }
            });
            return found;
        }
    }
})();
