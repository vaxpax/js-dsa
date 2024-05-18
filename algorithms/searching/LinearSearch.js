"use strict";

/** @module LinearSearch */

import {defaultCompare} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating LinearSearch algorithm
 * @classdesc
 */
class LinearSearch {
    /**
     * @class Creates a new LinearSearch algorithm instance.
     * @param {array} array - array of object to search in
     * @alias LinearSearch
     */
    constructor(array) {
        this.array = array;
    }

    /**
     * @summary Returns index of object if it is present in array
     * @param {any} x - object to search for
     * @return {number} index of object in array if found. Otherwise, returns -1
     */
    search(x) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === x) {
                return i;
            }
        }

        return -1;
    }
}

export {
    LinearSearch,
};