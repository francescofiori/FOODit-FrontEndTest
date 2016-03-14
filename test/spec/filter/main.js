'use strict';

describe('Service: courseFilter', function () {

    beforeEach(module('jstestApp'));

    var $filter;

    beforeEach(inject(function () {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    }));

    it('should filter main course items', function () {
        var result, items = [
            {
                "id": "6c098bd2443ca31180b69c0371390e57",
                "name": "Fusilli goat cheese and spinach",
                "description": "Spinach Pesto with Fusilli, Goat Cheese and Peppers. Serve with: Grated Carrot Salad.",
                "price": "8.50",
                "primaryImageUrl": "http://lh3.ggpht.com/_VsPUDOT5r9ShxxZUqcG6JDuamdoj5goKt1xsnCmX6lLgbdbgbh69jlMFBIo1P_icX0KQVcExBIcuppeIfYiSSE",
                "tags": ["pasta", "#course:main_courses", "#diet:vegetarian"]
            },
            {
                "id": "020d99cc7c0f43a03fa1bac2160041b2",
                "name": "Roast Mix",
                "description": "Served with roast duck, crispy pork belly and char siu roast pork with seasonal steamed greens on rice",
                "price": "8.95",
                "primaryImageUrl": "http://lh4.ggpht.com/2j4BAcPw-mCPApc2qvUSZpcEH39uFWnX5YnDMDKi0rX_D2YYosvf6SfiWBljTV24n8nYjaVg65PZRoFbeoh8XzA",
                "tags": ["pork"]
            }
        ];
        result = $filter('courseFilter')(items, 'main');

        expect(result.length).toEqual(1);
    });

    it('should filter other course items', function () {
        var result, items = [
            {
                "id": "6c098bd2443ca31180b69c0371390e57",
                "name": "Fusilli goat cheese and spinach",
                "description": "Spinach Pesto with Fusilli, Goat Cheese and Peppers. Serve with: Grated Carrot Salad.",
                "price": "8.50",
                "primaryImageUrl": "http://lh3.ggpht.com/_VsPUDOT5r9ShxxZUqcG6JDuamdoj5goKt1xsnCmX6lLgbdbgbh69jlMFBIo1P_icX0KQVcExBIcuppeIfYiSSE",
                "tags": ["pasta", "#course:main_courses", "#diet:vegetarian"]
            },
            {
                "id": "020d99cc7c0f43a03fa1bac2160041b2",
                "name": "Roast Mix",
                "description": "Served with roast duck, crispy pork belly and char siu roast pork with seasonal steamed greens on rice",
                "price": "8.95",
                "primaryImageUrl": "http://lh4.ggpht.com/2j4BAcPw-mCPApc2qvUSZpcEH39uFWnX5YnDMDKi0rX_D2YYosvf6SfiWBljTV24n8nYjaVg65PZRoFbeoh8XzA",
                "tags": ["pork"]
            }
        ];
        result = $filter('courseFilter')(items, 'other');

        expect(result.length).toEqual(1);
    });
});
