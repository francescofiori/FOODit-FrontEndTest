(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.main.factory:MenuService
     * @description
     * # MenuService
     * Service for managing the menu
     */
    angular
        .module('jstestApp.main')
        .factory('MenuService', MenuService);

    MenuService.$inject = ['$http'];
    /* @ngInject */
    function MenuService($http) {
        var service = {
            get: get
        };

        return service;

        function get() {
            return $http.get('/data/menu.json');
        }
    }
})();
