"use strict";

/** @module FibonacciSearch */

/**
 * @summary Class encapsulating FibonacciSearch algorithm
 * @classdesc
 */
class FibonacciSearch {
    /**
     * @class Creates a new FibonacciSearch algorithm instance.
     * @param {array} array - array of numbers to search in. Must be sorted array (ASC)
     * @alias FibonacciSearch
     */
    constructor(array) {
        this.array = array;
    }

    /**
     * @summary Returns index of object if it is present in array
     * @param {any} x - number to search for
     * @return {number} index of object in array if found. Otherwise, returns -1
     */
    search(x) {
        let fibN2 = 0;
        let fibN1 = 1;
        let fibN = fibN2 + fibN1;

        // find Fibonacci number greater or equal to array length
        while (fibN < this.array.length) {
            fibN2 = fibN1;
            fibN1 = fibN;
            fibN = fibN2 + fibN1;
        }

        let offset = -1;

        while (fibN > 1) {
            let i = Math.min(offset + fibN2, this.array.length - 1);
            if (this.array[i] === x) {
                return i;
            }

            if (this.array[i] < x) {
                fibN = fibN1;
                fibN1 = fibN2;
                fibN2 = fibN - fibN1;
                offset = i;
            } else {
                fibN = fibN2;
                fibN1 = fibN1 - fibN2;
                fibN2 = fibN - fibN1;
            }
        }

        if (fibN1 === 1 && this.array[this.array.length-1] === x)
            return this.array.length - 1;

        return -1;
    }

}

export {
    FibonacciSearch,
};