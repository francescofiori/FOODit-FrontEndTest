'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MealsCtrl
 * @description
 * # MealsCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MealsCtrl', ['$scope', function ($scope) {
    $scope.addToCart = function(mealId) {
      console.log(mealId);
    }
  }
  ]);
