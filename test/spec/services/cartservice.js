'use strict';

describe('Service: CartService', function () {

    beforeEach(module('jstestApp'));

    var CartService, $cookieStore;
    beforeEach(inject(function ($injector, $cookieStore) {
        $cookieStore          = $injector.get('$cookieStore');
        CartService = $injector.get('CartService');
    }));

    it('should do something', function () {
        expect(!!CartService).toBe(true);
    });

    it('should load the cart from empty cookie', function() {
        var data = CartService.getCartFromCookie();
        expect(data.items.length).toBe(0);
        expect(data.cartTotal).toBe(0);
        expect(data.mainCount).toBe(0);
        expect(data.otherCount).toBe(0);
    });

    it('should add items to cart', function() {
        var meal = {
            "id": "1936686929c17774bb7d29f4277ffddb",
            "name": "Murg Hari Mirch",
            "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
            "price": "4.50",
            "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
            "tags": ["chicken"]
        };
        CartService.addToCart(meal);

        var data = CartService.getCartFromCookie();
        expect(data.items.length).toBe(1);
        expect(data.cartTotal).toBe(4.50);
        expect(data.mainCount).toBe(0);
        expect(data.otherCount).toBe(1);
    });

    it('should add items to cart 2', function() {
        var meal1 = {
            "id": "1936686929c17774bb7d29f4277ffddb",
            "name": "Murg Hari Mirch",
            "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
            "price": "4.50",
            "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
            "tags": ["chicken"]
        },
        meal2 = {
            "id": "046cc14b30d162bacb38ca811d072cd1",
            "name": "THE PIMP STEAK",
            "description": "All beef and all tasty, it smacks you in the kisser with a healthy punch of garlic, paprika \u0026 black pepper.",
            "price": "4.00",
            "primaryImageUrl": "http://lh4.ggpht.com/kmVr1rf1PNB_L7D7SpjPuaMjYLJj0kTBfF80XWTMebRcE8vDPkwm4tb-z0zIGOOOwynOeqqBGD8jD7T6MFtYBHA",
            "tags": ["#course:main_courses", "#type:lunch", "#type:dinner", "#allergen:wheat", "beef"]
        };
        CartService.addToCart(meal1);
        CartService.addToCart(meal2);

        var data = CartService.getCartFromCookie();
        expect(data.items.length).toBe(2);
        expect(data.cartTotal).toBe(8.50);
        expect(data.mainCount).toBe(1);
        expect(data.otherCount).toBe(1);
    });

    it('should remove item from cart', function() {
        var meal1 = {
                "id": "1936686929c17774bb7d29f4277ffddb",
                "name": "Murg Hari Mirch",
                "description": "\"Morsels of chicken, stir fried with green chillies in a delicate sauce.\"",
                "price": "4.50",
                "primaryImageUrl": "http://lh4.ggpht.com/vpyNM-IjSMvg6ToLCgIpg28NQDH9l8aIo_ZQ9SK6DKV_b-1LMLYg4bsvUNOPTrhnObkW9_Y3DA7nGpbvfvsNF_TU",
                "tags": ["chicken"]
            },
            meal2 = {
                "id": "046cc14b30d162bacb38ca811d072cd1",
                "name": "THE PIMP STEAK",
                "description": "All beef and all tasty, it smacks you in the kisser with a healthy punch of garlic, paprika \u0026 black pepper.",
                "price": "4.00",
                "primaryImageUrl": "http://lh4.ggpht.com/kmVr1rf1PNB_L7D7SpjPuaMjYLJj0kTBfF80XWTMebRcE8vDPkwm4tb-z0zIGOOOwynOeqqBGD8jD7T6MFtYBHA",
                "tags": ["#course:main_courses", "#type:lunch", "#type:dinner", "#allergen:wheat", "beef"]
            };
        CartService.addToCart(meal1);
        CartService.addToCart(meal2);

        var data = CartService.getCartFromCookie();
        expect(data.items.length).toBe(2);
        expect(data.cartTotal).toBe(8.50);
        expect(data.mainCount).toBe(1);
        expect(data.otherCount).toBe(1);

        CartService.removeFromCart(meal2);

        data = CartService.getCartFromCookie();
        expect(data.items.length).toBe(1);
        expect(data.cartTotal).toBe(4.50);
        expect(data.mainCount).toBe(0);
        expect(data.otherCount).toBe(1);

        CartService.removeFromCart(meal1);

        data = CartService.getCartFromCookie();
        expect(data.items.length).toBe(0);
        expect(data.cartTotal).toBe(0);
        expect(data.mainCount).toBe(0);
        expect(data.otherCount).toBe(0);
    });
});
