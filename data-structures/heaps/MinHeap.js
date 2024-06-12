"use strict";

import {defaultCompare} from "../../utils/Utils.js";
import {MaxHeap} from "./MaxHeap.js";

/**
 *@summary Class encapsulating MinHeap data structure. Underlying data-structure is array.
 * @classdesc
 * @memberof heaps
 */
class MinHeap extends MaxHeap {

    /**
     * @class Creates a new MaxHeap.
     * @alias MinHeap
     * @param {array}  dataArray Array of objects to build heap from
     * @param {function} compare - function to compare two objects in the heap.
     *  compare(a,b) returns -1 if a<b, 0 if a===b and +1 if a > b.
     * @constructor
     */
    constructor(dataArray = [], compare = defaultCompare) {
        super(dataArray, compare);
    }

    /**
     * @summary Swap old element with new one in heap
     * @param {*} oldElement - Element to be swapped
     * @param {*} newElement - Element to swap with
     * @method
     * @instance
     */
    swap(oldElement, newElement) {
        if (this.isEmpty()) {
            return null;
        }
        let position = this.heap.findIndex(element => element === oldElement);
        if (position >= 0) {
            this.heap[position] = newElement;
            let left = (position << 1) + 1;
            if (position === 0 || this.compare(newElement, this.heap[left]) > 0) {
                this._heapifyDown(position);
            } else if (left >= this.heap.length || this.compare(newElement, this.heap[left]) < 0) {
                this._heapifyUp(position);
            }
        }
    }

    _heapifyDown(index) {
        this.heapify(this.heap.length, index);
    }

    heapify(length, index) {
        let largest = index;
        let left = (index << 1) + 1;
        let right = (index << 1) + 2;

        if (left <= length && this.compare(this.heap[left], this.heap[index]) < 0) {
            largest = left;
        }

        if (right <= length && this.compare(this.heap[right], this.heap[largest]) < 0) {
            largest = right;
        }

        if (largest !== index) {
            this._swap(index, largest);
            this.heapify(length, largest);
        }
    }

    _heapifyUp(index) {
        let parent = index >> 1;
        if (parent >= 0) {
            if (this.compare(this.heap[index], this.heap[parent]) < 0) {
                this._swap(index, parent);
                this._heapifyUp(parent);
            }
        }
    }
}

export {
    MinHeap,
}
