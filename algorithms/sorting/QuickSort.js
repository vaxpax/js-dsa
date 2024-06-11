"use strict";

/**@namespace sorting*/

import {Sort} from "./Sort.js";
import {defaultCompare, Order} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating QuickSort algorithm
 * @classdesc
 * @memberof sorting
 */
class QuickSort extends Sort {
    /**
     * @class Creates a new QuickSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BubbleSort
     */
    constructor(array, compare=defaultCompare, order = Order.ASC) {
        super(array, compare, order);
    }

    /**
     * @summary Sorts array using Quick sort algorithm
     */
    sort() {
        this._quickSort(0, this.array.length - 1);
    }

    _quickSort(low, high) {
        if (low < high) {
            let partitionIndex = this._partition(low, high);
            this._quickSort(low, partitionIndex - 1);
            this._quickSort(partitionIndex + 1, high);
        }

    }

    // Function to partition the array and return the partition index
    _partition(low, high) {
        let pivot = this.array[high];
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            if (this.shouldSwapByValue(pivot, this.array[j])) {
                i++;
                this.swap(i, j);
            }
        }

        this.swap(i+1, high);
        return i + 1; // Return the partition index
    }
}

export {
    QuickSort
}
