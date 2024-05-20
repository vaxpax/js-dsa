"use strict";

/**@namespace searching*/

import {defaultCompare} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating BinarySearch algorithm
 * @classdesc
 * @memberof searching
 */
class BinarySearch {
    /**
     * @class Creates a new BinarySearch algorithm instance.
     * @param {array} array - array of objects to search in. Must be sorted array (ASC)
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
        return this.searchAlgorithm(x, 0, this.array.length - 1);
    }

    searchAlgorithm(x, low, high) {
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