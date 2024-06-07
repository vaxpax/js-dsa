"use strict";

/**@namespace sorting*/

import {Sort} from "./Sort.js";
import {defaultCompare, Order} from "../../utils/Utils.js";

/**
 * @summary Class encapsulating BubbleSort algorithm
 * @classdesc
 * @memberof sorting
 */
class BubbleSort extends Sort {
    /**
     * @class Creates a new BubbleSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BubbleSort
     */
    constructor(array, compare=defaultCompare, order = Order.ASC) {
        super(array, compare, order);
    }

    /**
     * @summary Sorts array using Bubble sort algorithm
     */
    sort() {
        let swapped;
        for (let i = 0; i < this.array.length -1; i++) {
            swapped = false;
            for (let j = 0; j < this.array.length - i - 1; j++) {
                if (this.shouldSwap(j, j+1)) {
                    this.swap(j, j+1);
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }

        }
    }
}

export {
    BubbleSort
}
