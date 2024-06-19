"use strict";

import {Sort} from "./Sort.js";
import {defaultCompare, Order} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating MergeSort algorithm
 * @classdesc
 * @memberof sorting
 */
class MergeSort extends Sort {
    /**
     * @class Creates a new MergeSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BubbleSort
     */
    constructor(array, compare=defaultCompare, order = Order.ASC) {
        super(array, compare, order);
    }

    /**
     * @summary Sorts array using Merge sort algorithm
     */
    sort() {
        this._mergeSort(0, this.array.length - 1)
    }

    _mergeSort(left, right) {
        if (left < right) {
            let middle = left + Math.floor((right -left) / 2);
            this._mergeSort(left, middle);
            this._mergeSort(middle + 1, right);
            this._merge(left, middle, right);

        }
    }

    _merge(left, middle, right) {
        let i, j, k;

        const leftSubArray = new Array(middle - left + 1);
        const rightSubArray = new Array(right - middle);

        // Copy elements to sub arrays
        for (i = 0; i < leftSubArray.length; i++) {
            leftSubArray[i] = this.array[left + i];
        }
        for (i = 0; i < rightSubArray.length; i++) {
            rightSubArray[i] = this.array[middle + 1 + i];
        }

        // Merge back
        i = 0;
        j = 0;
        k = left;

        while (i < leftSubArray.length && j < rightSubArray.length) {
            if (this.shouldSwapByValue(rightSubArray[j], leftSubArray[i])) {
                this.array[k] = leftSubArray[i];
                i++;
            } else {
                this.array[k] = rightSubArray[j];
                j++;
            }
            k++;
        }

        //Copy remaining elements of left and right sub array
        while (i < leftSubArray.length) {
            this.array[k] = leftSubArray[i];
            i++;
            k++;
        }

        while (j < rightSubArray.length) {
            this.array[k] = rightSubArray[j];
            j++;
            k++;
        }
    }
}

export {
    MergeSort
}
