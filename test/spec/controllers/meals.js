'use strict';

describe('Controller: MealsCtrl', function () {

    beforeEach(module('jstestApp'));

    var MealsCtrl,
        scope,
        CartService,
        controller,
        tagsWithImg = ["charcoal", "cheese", "chicken", "grilled", "high-protein", "lamb", "pasta", "peanut", "pork", "seafood", "snack", "spicy", "starter", "sweet", "vegetarian"];;

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        controller = $controller;
        CartService = $injector.get('CartService');
    }));

    it('should call meals controller add to cart', function () {
        var vm = controller("MealsCtrl", { $scope: scope });
        var meal = {
            "id": "1936686929c17774bb7d29f4277ffddb",
            "name": "Murg Hari Mirch",
            "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
            "price": "4.50",
            "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
            "tags": ["chicken"]
        };
        var cart = CartService.getCartFromCookie();
        expect(cart.items.length).toBe(0);
        CartService.addToCart(meal);
        cart = CartService.getCartFromCookie();
        expect(cart.items.length).toBe(1);
    });

    it('should call meals controller to check meals tags', function () {
        var vm = controller("MealsCtrl", { $scope: scope });
        expect(vm.checkTags(tagsWithImg, 'charcoal')).toBe(true);
        expect(vm.checkTags(tagsWithImg, 'asd')).toBe(false);
    });

    it('should call meals controller to check meals tags for allowed tags', function () {
        var vm = controller("MealsCtrl", { $scope: scope });
        expect(vm.checkTagContainer('charcoal')).toBe(true);
        expect(vm.checkTagContainer('asd')).toBe(false);
    });
});
