(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name jstestApp.main.factory:CartService
     * @description
     * # CartService
     * Service for managing orders and the cart
     */
    angular
        .module('jstestApp.main')
        .factory('CartService', CartService);

    CartService.$inject = ['$cookieStore'];
    /* @ngInject */
    function CartService($cookieStore) {
        var service = {
            getCartFromCookie: getCartFromCookie,
            getCart: getCart,
            addToCart: addToCart,
            removeFromCart: removeFromCart
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
                addToCoursesCount(meal.tags);
            }
            cart.cartTotal += parseFloat(meal.price);
            persistToCookie();
        }

        function removeFromCart (meal) {
            var itemToRemove = -1;
            angular.forEach(cart.items, function(item, key){
                if (item.id == meal.id) {
                    if (cart.items[key].quantity > 1) {
                        cart.items[key].quantity--;
                    } else {
                        removeFromCoursesCount(meal.tags);
                        itemToRemove = key;
                    }
                }
            });
            if (itemToRemove != -1) cart.items.splice(itemToRemove, 1);
            cart.cartTotal -= parseFloat(meal.price);
            persistToCookie();
        }

        function addToCoursesCount (item) {
            if (item.indexOf("#course:main_courses") != -1) {
                cart.mainCount++;
            } else {
                cart.otherCount++;
            }
        }

        function removeFromCoursesCount (item) {
            if (item.indexOf("#course:main_courses") != -1) {
                if (cart.mainCount > 0) cart.mainCount--;
            } else {
                if (cart.otherCount > 0) cart.otherCount--;
            }
        }

        function persistToCookie () { $cookieStore.put('cart', cart); }
    }
})();
