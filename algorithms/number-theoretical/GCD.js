"use strict";

/**
 * @summary Class encapsulating functions related to prime numbers
 * @memberof number-theoretical
 */
class GCD {
    /**
     * @summary Calculate the greatest common divisor for 2 numbers
     * @param {number} a First number to calculate GCD
     * @param {number} b Second number to calculate GCD
     * @returns {number} GDC of a and b
     * @static
     */
    static calculate(a, b) {
        let i = Math.min(a, b);
        for (let j = i; j > 1; j--) {
            if (a % j === 0 && b % j === 0) {
                return j;
            }
        }
        return 1;
    }

    /**
     * @summary Calculate the greatest common divisor for 2 numbers using Euclid's repeated subtraction approach.
     * @param {number} a First number to calculate GCD
     * @param {number} b Second number to calculate GCD
     * @returns {number} GDC of a and b
     * @static
     */
    static calculateEuclid(a, b) {
        if (b === 0) {
            return a;
        }
        return GCD.calculateEuclid(b, a % b);
    }

    /**
     * @summary Calculate greatest common divisor for array of numbers
     * @param {array} numbers Array of numbers to calculate GDC
     * @returns {number} GDC of an array of numbers
     * @static
     */
    static calculateForArray(numbers) {
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result = GCD.calculateEuclid(result, numbers[i]);
            if (result === 1) {
                return 1;
            }
        }
        return result;
    }
}

export {
    GCD
}
