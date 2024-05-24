"use strict";

import {GCD} from "../../../index.js";
import {assert} from "chai";

export default function test() {
    describe("GCD Test", () => {
        it('GCD.calculate, GCD.calculateEuclid', () => {
            assert.equal(GCD.calculate(20, 30 ), 10);
            assert.equal(GCD.calculateEuclid(20, 30 ), 10);

            assert.equal(GCD.calculate(5, 7 ), 1);
            assert.equal(GCD.calculateEuclid(5, 7 ), 1);

            assert.equal(GCD.calculate(15, 5 ), 5);
            assert.equal(GCD.calculateEuclid(15, 5 ), 5);

            assert.equal(GCD.calculate(128, 96 ), 32);
            assert.equal(GCD.calculateEuclid(128, 96 ), 32);
        });
        it('GCD.calculateForArray', () => {
            assert.equal(GCD.calculateForArray([20, 30]), 10);
            assert.equal(GCD.calculateForArray([2, 4, 6, 8, 16]), 2);
            assert.equal(GCD.calculateForArray([3, 9, 15, 18, 21]), 3);
            assert.equal(GCD.calculateForArray([3, 9, 15, 18, 21, 7]), 1);
        });

    });
}

// describe('GCD', () => {
//     test();
// });
