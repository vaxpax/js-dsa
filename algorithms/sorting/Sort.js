"use strict";

import {defaultCompare, Order} from "../../utils/Utils.js";

/**
 * @summary Abstract class for sorting algorithms
 * @classdesc
 * @memberof sorting
 */
class Sort {
    /**
     * @class Creates a new BubbleSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias Sort
     */
    constructor(array, compare=defaultCompare, order = Order.ASC) {
        this.array = array;
        this.compare = compare;
        this.order = order;
    }

    /**
     * @summary Swaps elements in array. Method does not check if indexes are valid.
     * @param {number} i - index of a first element to swap
     * @param {number} j - index of a second element to swap
     */
    swap(i, j) {
        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }

    /**
     * @summary Check if elements on given indexes should be swapped
     * @param {number} i - index of a first element to check
     * @param {number} j - index of a second element to check
     * @return {boolean} true if elements should be swapped, otherwise it returns false
     */
    shouldSwap(i, j) {
        return this.shouldSwapByValue(this.array[i], this.array[j]);
    }

    /**
     * @summary Check if elements should be swapped
     * @param {number} i - first element to check
     * @param {number} j - second element to check
     * @return {boolean} true if elements should be swapped, otherwise it returns false
     */
    shouldSwapByValue(a, b) {
        if (this.order === Order.ASC && this.compare(a, b) > 0) {
            return true;
        }
        if (this.order === Order.DESC && this.compare(a, b) < 0) {
            return true;
        }
        return false;
    }
}

export {
    Sort
}
