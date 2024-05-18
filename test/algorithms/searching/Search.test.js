"use strict";

import { assert } from "chai";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 23, 45, 76, 234, 567, 1234];
let stringArray = ["Antony", "Beatris", "Cindy", "John", "Mark", "Nate", "Peter"]

function compareStrings(a, b) {
    return a.localeCompare(b);
}

export default function searchTest(search, title) {
    describe(title, () => {
        it('search first element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(1), 0);
        });
        it('search last element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(1234), array.length-1);
        });
        it('search arbitrary element in array', () => {
            const searchAlgorithm = new search(array);
            assert.equal(searchAlgorithm.search(2), 1);
            assert.equal(searchAlgorithm.search(5), 4);
            assert.equal(searchAlgorithm.search(7), 6);
            assert.equal(searchAlgorithm.search(10), 9);
            assert.equal(searchAlgorithm.search(234), array.length-3);
            assert.equal(searchAlgorithm.search(567), array.length-2);
        });
        it('search nonexisting element in array', () => {
            const binarySearch = new search(array);
            assert.equal(binarySearch.search(-1), -1);
            assert.equal(binarySearch.search(30), -1);
            assert.equal(binarySearch.search(3000), -1);
        });
        it('search first element in strings array', () => {
            const searchAlgorithm = new search(stringArray, compareStrings);
            assert.equal(searchAlgorithm.search("Antony"), 0);
        });
        it('search last element in strings array', () => {
            const searchAlgorithm = new search(stringArray, compareStrings);
            assert.equal(searchAlgorithm.search("Peter"), stringArray.length-1);
        });
        it('search arbitrary element in strings array', () => {
            const searchAlgorithm = new search(stringArray, compareStrings);
            assert.equal(searchAlgorithm.search("Beatris"), 1);
            assert.equal(searchAlgorithm.search("Cindy"), 2);
            assert.equal(searchAlgorithm.search("John"), 3);
            assert.equal(searchAlgorithm.search("Mark"), 4);
            assert.equal(searchAlgorithm.search("Nate"), stringArray.length-2);
        });
        it('search nonexisting element in strings array', () => {
            const searchAlgorithm = new search(stringArray, compareStrings);
            assert.equal(searchAlgorithm.search("AA"), -1);
            assert.equal(searchAlgorithm.search("Clara"), -1);
            assert.equal(searchAlgorithm.search("Zed"), -1);
        });
    });
}

