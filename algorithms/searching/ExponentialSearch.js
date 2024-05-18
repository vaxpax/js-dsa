"use strict";

/** @module ExponentialSearch */

import {defaultCompare} from "../../utils/Utils.js";
import {BinarySearch} from "./BinarySearch.js";

/**
 * @summary Class encapsulating ExponentialSearch algorithm
 * @classdesc
 */
class ExponentialSearch {
    /**
     * @class Creates a new ExponentialSearch algorithm instance.
     * @param {array} array - array of objects to search in. Must be sorted array (ASC)
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias ExponentialSearch
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
        if (this.array[0] === x) {
            return 0;
        }
        let i = 1;
        while (i < this.array.length && this.compare(this.array[i], x) <= 0) {
            i = i * 2;
        }
        const binarySearch = new BinarySearch(this.array, this.compare);
        return binarySearch.searchAlgorithm(x, Math.floor(i/2), Math.min(i, this.array.length-1));
    }
}

export {
    ExponentialSearch,
};