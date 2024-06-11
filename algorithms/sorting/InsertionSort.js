"use strict";

import {Sort} from "./Sort.js";
import {defaultCompare, Order} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating InsertionSort algorithm
 * @classdesc
 * @memberof sorting
 */
class InsertionSort extends Sort {
    /**
     * @class Creates a new InsertionSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BubbleSort
     */
    constructor(array, compare = defaultCompare, order = Order.ASC) {
        super(array, compare, order);
    }

    /**
     * @summary Sorts array using Insertion sort algorithm
     */
    sort() {
        let key;
        let i, j;
        for (i = 1; i < this.array.length; i++) {
            key = this.array[i];
            j = i - 1;
            while (j >= 0 && this.shouldSwapByValue(this.array[j], key)) {
                this.array[j + 1] = this.array[j];
                j = j - 1;
            }
            this.array[j + 1] = key;
        }
    }
}

export {
    InsertionSort
}
