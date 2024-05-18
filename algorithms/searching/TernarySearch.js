"use strict";

/** @module TernarySearch */

import {defaultCompare} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating TernarySearch algorithm
 * @classdesc
 */
class TernarySearch {
    /**
     * @class Creates a new TernarySearch algorithm instance.
     * @param {array} array - array of objects to search in. Must be sorted array (ASC)
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias TernarySearch
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

    searchAlgorithm(x, left, right) {
        while (right >= left) {
            let mid1 = left + Math.floor((right - left) / 3);
            let mid2 = right - Math.floor((right - left) / 3);

            if (this.array[mid1] === x) {
                return mid1;
            }

            if (this.array[mid2] === x) {
                return mid2;
            }

            if (this.compare(x, this.array[mid1]) < 0) {
                right = mid1 - 1;
            } else if (this.compare(x, this.array[mid2]) > 0) {
                left = mid2 + 1;
            } else {
                left = mid1 + 1;
                right = mid2 - 1;
            }
        }

        return -1;
    }
}

export {
    TernarySearch,
};