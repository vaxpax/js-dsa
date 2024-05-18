"use strict";

/** @module BinarySearch */

import {defaultCompare} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating BinarySearch algorithm
 * @classdesc
 */
class BinarySearch {
    /**
     * @class Creates a new BinarySearch algorithm instance.
     * @param {array} array - array of object to search in
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BinarySearch
     */
    constructor(array, compare=defaultCompare) {
        this.array = array;
        this.compare = compare;
    }

    /**
     * @summary Returns index of object if it is present in array
     * @param {any} x - object to search for
     * @return {number} index of object in array if found. Otherwise, returns -1
     */
    search(x) {
        let low = 0;
        let high = this.array.length - 1;
        let mid;
        while (low <= high) {
            mid = low + Math.floor((high -low) / 2);
            if (this.array[mid] === x) {
                return mid;
            }

            if (this.compare(this.array[mid], x) < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}

export {
    BinarySearch,
};