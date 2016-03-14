(function () {
    'use strict';

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

        function get () {
            return $http.get('/data/menu.json');
        }
    }
})();
