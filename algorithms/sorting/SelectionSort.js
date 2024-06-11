"use strict";

import {Sort} from "./Sort.js";
import {defaultCompare, Order} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating SelectionSort algorithm
 * @classdesc
 * @memberof sorting
 */
class SelectionSort extends Sort {
    /**
     * @class Creates a new SelectionSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BubbleSort
     */
    constructor(array, compare=defaultCompare, order = Order.ASC) {
        super(array, compare, order);
    }

    /**
     * @summary Sorts array using Selection sort algorithm
     */
    sort() {
        let index;
        for (let i = 0; i < this.array.length - 1; i++) {
            index = i;
            for (let j = i + 1; j < this.array.length; j++) {
                if (this.shouldSwap(index, j)) {
                    index = j;
                }
            }
            this.swap(index, i);
        }
    }
}

export {
    SelectionSort
}
