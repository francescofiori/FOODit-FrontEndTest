'use strict';

describe('Controller: MainCtrl', function () {

    beforeEach(module('jstestApp'));

    var MainCtrl,
        scope,
        MenuService,
        CartService,
        controller;

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        controller = $controller;
        MenuService = $injector.get('MenuService');
        CartService = $injector.get('CartService');
        var success = function(func) {
            return func({resultCount: 1});
        };
        spyOn(MenuService, 'get').and.returnValue({success: success});
    }));

    it('should call the menu service to retrieve a list of meals', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(MenuService.get).toHaveBeenCalled();
        expect(vm.menu.resultCount).toBe(1);
    });

    it('should call the cart service to retrieve the orders', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(vm.cart.items.length).toBe(0);

        var meal = {
            "id": "1936686929c17774bb7d29f4277ffddb",
            "name": "Murg Hari Mirch",
            "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
            "price": "4.50",
            "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
            "tags": ["chicken"]
        };
        CartService.addToCart(meal);

        expect(vm.cart.items.length).toBe(1);
    });

    it('should check if there are items in the cart', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(vm.cartHasItems()).toBe(false);

        var meal = {
            "id": "1936686929c17774bb7d29f4277ffddb",
            "name": "Murg Hari Mirch",
            "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
            "price": "4.50",
            "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
            "tags": ["chicken"]
        };
        CartService.addToCart(meal);

        expect(vm.cartHasItems()).toBe(true);
    });

    it('should check if there are main course items in the cart', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(vm.cartHasMainItems()).toBe(false);

        var meal = {
            "id": "6c098bd2443ca31180b69c0371390e57",
            "name": "Fusilli goat cheese and spinach",
            "description": "Spinach Pesto with Fusilli, Goat Cheese and Peppers. Serve with: Grated Carrot Salad.",
            "price": "8.50",
            "primaryImageUrl": "http://lh3.ggpht.com/_VsPUDOT5r9ShxxZUqcG6JDuamdoj5goKt1xsnCmX6lLgbdbgbh69jlMFBIo1P_icX0KQVcExBIcuppeIfYiSSE",
            "tags": ["pasta", "#course:main_courses", "#diet:vegetarian"]
        };
        CartService.addToCart(meal);

        expect(vm.cartHasMainItems()).toBe(true);
    });

    it('should check if there are other course items in the cart', function () {
        var vm = controller("MainCtrl", { $scope: scope });
        expect(vm.cartHasOtherItems()).toBe(false);

        var meal = {
            "id": "1936686929c17774bb7d29f4277ffddb",
            "name": "Murg Hari Mirch",
            "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
            "price": "4.50",
            "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
            "tags": ["chicken"]
        };
        CartService.addToCart(meal);

        expect(vm.cartHasOtherItems()).toBe(true);
    });
});
