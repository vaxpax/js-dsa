"use strict";

import {Sort} from "./Sort.js";
import {defaultCompare, Order} from "../../utils/Utils.js";
import {MinHeap} from "../../data-structures/heaps/MinHeap.js";
import {MaxHeap} from "../../data-structures/heaps/MaxHeap.js";

/**
 * @summary Class encapsulating HeapSort algorithm
 * @classdesc
 * @memberof sorting
 */
class HeapSort extends Sort {
    /**
     * @class Creates a new HeapSort algorithm instance.
     * @param {array} array - array of objects to sort.
     * @param {number} order - ASC or DESC ordering
     * @param {function} [compare=defaultCompare] function to compare two objects in array
     * @alias BubbleSort
     */
    constructor(array, compare=defaultCompare, order = Order.ASC) {
        super(array, compare, order);
    }

    /**
     * @summary Sorts array using Heap sort algorithm
     */
    sort() {
        let heap;
        if (this.order === Order.ASC) {
            heap = new MaxHeap(this.array, this.compare);
        } else {
            heap = new MinHeap(this.array, this.compare);
        }

        for(let i = this.array.length - 1; i > 0; i--) {
            this.swap(0, i);
            heap.heapify(i-1, 0);
        }
    }
}

export {
    HeapSort
}
