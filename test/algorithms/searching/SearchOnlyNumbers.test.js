"use strict";

import { assert } from "chai";

let array = [-5, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 23, 45, 76, 234, 567, 1234];

export default function searchTest(search, title) {
    describe(title, () => {
        it('search empty array', () => {
            const searchAlgorithm = new search([]);
            assert.equal(searchAlgorithm.search(100), -1);
        });
        it('search first element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(-5), 0);
        });
        it('search last element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(1234), array.length-1);
        });
        it('search arbitrary element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(-1), 1);
            assert.equal(searchAlgorithm.search(5), 6);
            assert.equal(searchAlgorithm.search(7), 8);
            assert.equal(searchAlgorithm.search(10), 11);
            assert.equal(searchAlgorithm.search(234), array.length-3);
            assert.equal(searchAlgorithm.search(567), array.length-2);
        });
        it('search nonexisting element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(-17), -1);
            assert.equal(searchAlgorithm.search(30), -1);
            assert.equal(searchAlgorithm.search(40), -1);
            assert.equal(searchAlgorithm.search(50), -1);
            assert.equal(searchAlgorithm.search(3000), -1);
        });
    });
}

