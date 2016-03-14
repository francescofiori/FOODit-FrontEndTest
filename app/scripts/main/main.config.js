(function () {
    'use strict';

    var main = angular.module('jstestApp.main');

    main.config(configure);

    configure.$inject = ['$routeProvider'];
    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainC'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
