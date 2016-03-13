(function () {
    'use strict';

    angular
        .module('jstestApp.core')
        .factory('CartService', CartService);

    CartService.$inject = ['$cookieStore'];
    /* @ngInject */
    function CartService($cookieStore) {
        var service = {
            getCartFromCookie: getCartFromCookie,
            getCart: getCart,
            addToCart: addToCart
            },
            cart;

        return service;

        function getCartFromCookie () {
            if (typeof $cookieStore.get('cart') == "undefined") {
                cart = {
                    items: [],
                    cartTotal: 0,
                    mainCount: 0,
                    otherCount: 0
                };
            } else {
                cart = $cookieStore.get('cart');
            }
            return cart;
        }

        function getCart () { return cart; }

        function addToCart (meal) {
            var found = false;
            angular.forEach(cart.items, function(item, key){
                if (item.id == meal.id) {
                    found = true;
                    cart.items[key].quantity ++;
                }
            });
            if (!found) {
                meal.quantity = 1;
                cart.items.push(meal);
            }
            updateCoursesCount(meal.tags);
            cart.cartTotal += parseFloat(meal.price);
            persistToCookie();
        }

        function updateCoursesCount (item) {
            if (item.indexOf("#course:main_courses") != -1) {
                cart.mainCount++;
            } else {
                cart.otherCount++;
            }
        }

        function persistToCookie () { $cookieStore.put('cart', cart); }
    }
})();
