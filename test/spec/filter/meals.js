'use strict';

describe('Service: wordFilter', function () {

    beforeEach(module('jstestApp'));

    var $filter;

    beforeEach(inject(function() {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    }));

    it('should filter text at the first period', function () {
        var result, text = 'This seafood risotto recipe is infused with a number of fresh herbs, imparting remarkable flavour onto the risotto rice base. With scallops, prawns and mussels to make up the risotto but you can use whatever seafood is available and you like. Served with some cheddar rolls or a small avocado salad for a delicious seafood supper.';
        result = $filter('wordFilter')(text);

        expect(result).toEqual('This seafood risotto recipe is infused with a number of fresh herbs, imparting remarkable flavour onto the risotto rice base.');
    });
});
