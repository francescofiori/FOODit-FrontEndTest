'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('jstestApp'));

    var MainCtrl,
        scope,
        MenuService,
        CartService,
        controller;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        controller = $controller;
        MenuService = $injector.get('MenuService');
        CartService = $injector.get('CartService');
        var success = function(func) {
            return func({resultCount: 1});
        };
        spyOn(MenuService, 'get').and.returnValue({success: success});
        spyOn(CartService, 'getCartFromCookie').and.returnValue({success: success});
    }));

    it('should call the menu service to retrieve a list of meals', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(MenuService.get).toHaveBeenCalled();
        expect(vm.menu.resultCount).toBe(1);
    });

    it('should call the cart service to retrieve the cart list', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(CartService.getCartFromCookie).toHaveBeenCalled();
        expect(vm.cart.items.length).toBe(0);
    });
});
