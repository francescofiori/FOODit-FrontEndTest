'use strict';

describe('Controller: HeaderCtrl', function () {

    beforeEach(module('jstestApp'));

    var HeaderCtrl,
        scope,
        CartService,
        controller;

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        controller = $controller;
        CartService = $injector.get('CartService');
    }));

    it('should call header controller add to cart', function () {
        var vm = controller("HeaderCtrl", { $scope: scope });
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

        vm.addToCart(meal);

        cart = CartService.getCartFromCookie();
        expect(cart.items.length).toBe(1);
    });

    it('should call header controller add to cart', function () {
        var vm = controller("HeaderCtrl", { $scope: scope });
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

        vm.removeFromCart(meal);

        cart = CartService.getCartFromCookie();
        expect(cart.items.length).toBe(0);
    });
});
