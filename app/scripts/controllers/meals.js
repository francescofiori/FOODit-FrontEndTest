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

  MealsCtrl.$inject = ['$scope'];
  /* @ngInject */
  function MealsCtrl($scope) {
    var vm = this;

    activate();

    vm.addToCart = addToCart;

    function activate() {
      console.log('ciao');
    }

    function addToCart (mealId) {
      console.log(mealId);
    }
  }
})();
