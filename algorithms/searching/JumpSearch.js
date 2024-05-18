"use strict";

/** @module JumpSearch */

import {defaultCompare} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating JumpSearch algorithm
 * @classdesc
 */
class JumpSearch {
    /**
     * @class Creates a new JumpSearch algorithm instance.
     * @param {array} array - array of objects to search in
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias JumpSearch
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
        let jump = Math.floor(Math.sqrt(this.array.length));
        let step = jump;
        let previous = 0;

        for (let minStep = Math.min(step, this.array.length) - 1;
                    this.array[minStep] < x;
                    minStep = Math.min(step, this.array.length) - 1) {
            previous = step;
            step += jump;
            if (previous >= this.array.length)
                return -1;
        }

        while (this.compare(this.array[previous], x) < 0) {
            previous++;
            // If we reached next block or end of
            // array, element is not present.
            if (previous === Math.min(step, this.array.length))
                return -1;
        }

        if (this.array[previous] === x) {
            return previous;
        }

        return -1;
    }
}

export {
    JumpSearch,
};