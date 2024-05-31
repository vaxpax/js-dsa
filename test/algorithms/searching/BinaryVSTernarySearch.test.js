"use strict";

import searchTest from "./Search.test.js";
import {BinarySearch, TernarySearch} from "../../../index.js";
import {assert} from "chai";



export default function test() {
    const array = [];

    beforeEach(function () {
        console.log("Creating array of 10M element");
        for (let i = 0; i <= 100000000; i++) {
            array[i] = i;
        }
    });
    describe("BinarySearch vs. TernarySearch", () => {
        it('Compare times', () => {
            const binarySearch = new BinarySearch(array);
            const ternarySearch = new TernarySearch(array);

            let before = Date.now();
            let position = binarySearch.search(0);
            let after = Date.now();

            let binarySearchTime = after - before;
            console.log("BinarySearch time = " + binarySearchTime);

            before = Date.now();
            position = ternarySearch.search(0);
            after = Date.now();

            let ternarySearchTime = after - before;
            console.log("TernarySearch time = " + ternarySearchTime);

            assert.equal(binarySearchTime < ternarySearchTime, true);
        }).timeout(100000);
    });
}
describe('BinarySearch', () => {
    test();
});

