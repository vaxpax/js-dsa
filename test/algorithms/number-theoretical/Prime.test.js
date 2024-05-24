"use strict";

import {Prime} from "../../../index.js";
import {assert} from "chai";
import {assertArrays} from "../../TestHelpers.js";

let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];

export default function test() {
    describe("Prime Test", () => {
        it('Prime.isPrime', () => {
            assert.equal(Prime.isPrime(-5), false);
            assert.equal(Prime.isPrime(-3.8), false);
            assert.equal(Prime.isPrime(0), false);
            assert.equal(Prime.isPrime(0.4), false);
            assert.equal(Prime.isPrime(1), false);
            assert.equal(Prime.isPrime(4), false);
            assert.equal(Prime.isPrime(8), false);
            assert.equal(Prime.isPrime(9), false);
            assert.equal(Prime.isPrime(41.7), false);

            for (let item of array) {
                assert.equal(Prime.isPrime(item), true);
            }
        });
        it('Prime.generate', () => {
            let generated = Prime.generate(20);
            assertArrays(array, generated);
        });
    });
}

// describe('Prime', () => {
//     test();
// });
