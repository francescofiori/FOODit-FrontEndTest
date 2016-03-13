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
        .module('jstestApp')
        .controller('MealsCtrl', MealsCtrl);

    MealsCtrl.$inject = [];
    /* @ngInject */
    function MealsCtrl() {
        var vm = this;
        var tagsWithImg = ["charcoal", "cheese", "chicken", "grilled", "high-protein", "lamb", "pasta", "peanut", "pork", "seafood", "snack", "spicy", "starter", "sweet", "vegetarian"];

        activate();

        vm.addToCart = addToCart;
        vm.checkTags = checkTags;
        vm.checkTagContainer = checkTagContainer;

        function activate() {

        }

        function addToCart (mealId) {
            console.log(mealId);
        }

        function checkTags (tags, tag) {
            return tags.indexOf(tag) != -1;
        }

        function checkTagContainer (tags) {
            var found = false;
            angular.forEach(tagsWithImg, function (tag) {
                if (tags.indexOf(tag) != -1) {
                    console.log('trovate');
                    found = true;
                }
            });
            return found;
        }
    }
})();
