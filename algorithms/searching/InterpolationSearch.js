"use strict";

/** @module InterpolationSearch */

/**
 * @summary Class encapsulating InterpolationSearch algorithm
 * @classdesc
 */
class InterpolationSearch {
    /**
     * @class Creates a new InterpolationSearch algorithm instance.
     * @param {array} array - array of numbers to search in. Must be sorted array (ASC)
     * @alias InterpolationSearch
     */
    constructor(array) {
        this.array = array;
    }

    /**
     * @summary Returns index of object if it is present in array
     * @param {any} x - number to search for
     * @return {number} index of object in array if found. Otherwise, returns -1
     */
    search(x) {
        let low = 0;
        let high = this.array.length - 1;
        let position = -1;
        let lowPrevious = 0, highPrevious = this.array.length - 1;
        while (low <= high) {
            position = low +
                Math.floor((((high - low) * (x - this.array[low])) / (this.array[high] - this.array[low])));
            if (this.array[position] === x) {
                return position;
            }

            if (this.array[position] < x) {
                low = position + 1;
            } else {
                high = position - 1;
            }

            // safety code if array is not uniformly distributed
            if (low === lowPrevious && high === highPrevious) {
                break;
            }
            lowPrevious = low;
            highPrevious = high;
            //console.log("position: " + position + " low: " + low + " high: " + high);
        }
        return -1;
    }

}

export {
    InterpolationSearch,
};