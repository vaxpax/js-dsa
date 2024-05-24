"use strict";

/**@namespace number-theoretical*/

/**
 * @summary Class encapsulating functions related to prime numbers
 */
class Prime {
    /**
     * @summary Cehcks if number is prime
     * @param {number} number Number to check if it is prime
     * @returns {boolean} True is number is prime, otherwise returns false
     * @static
     */
    static isPrime(number) {
        if (!Number.isInteger(number) || number < 2 ) {
            return false;
        }
        let i = 2;
        while (i <= (number >> 1)) {
            if (number % i == 0) {
                return false;
            }
            i++;
        }
        return true;
    }

    /**
     * @summary Generate array of prime numbers
     * @param {number} n Number of prime numbers to be generated
     * @returns {array} Array (length = n) of generated prime numbers
     * @static
     */
    static generate(n) {
        const array = [];
        let i = 2;
        let counter = 0;
        while (counter < n) {
            if (Prime.isPrime(i)) {
                array.push(i);
                counter++;
            }
            i++;
        }
        return array;
    }
}

export {
    Prime
}
