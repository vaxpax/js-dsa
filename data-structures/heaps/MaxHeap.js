"use strict";

/**@namespace heaps */

import {defaultCompare} from "../../utils/Utils.js";

/**
 *@summary Class encapsulating MaxHeap data structure. Underlying data-structure is array.
 * @classdesc
 * @memberof heaps
 */
class MaxHeap {

    /**
     * @class Creates a new MaxHeap.
     * @alias MaxHeap
     * @param {array}  dataArray Array of objects to build heap from
     * @param {function} compare - function to compare two objects in the heap.
     *  compare(a,b) returns -1 if a<b, 0 if a===b and +1 if a > b.
     * @constructor
     */
    constructor(dataArray = [], compare = defaultCompare) {
        this.compare = compare;
        this.heap = dataArray;

        if (this.heap.length > 0) {
            for (let i = (this.heap.length >> 1) - 1; i >= 0; i--) {
                this._heapifyDown(i);
            }
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    /**
     * @summary Pushes an element to the heap
     * @param {*} element - Element to insert in heap.
     * @method
     * @instance
     */
    push(element) {
        this.heap.push(element);
        this._heapifyUp(this.heap.length - 1);
    }

    /**
     * @summary Returns and removes a root element of the heap
     * @returns {*} Returns a root element of the heap. If heap is empty, returns null.
     * @method
     * @instance
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        let root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this._heapifyDown(0);
        return root;

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
            if (position === 0 || this.compare(newElement, this.heap[left]) < 0) {
                this._heapifyDown(position);
            } else if (left >= this.heap.length || this.compare(newElement, this.heap[left]) > 0) {
                this._heapifyUp(position);
            }
        }
    }

    /**
     * @summary Returns a root element of the heap
     * @returns {*} Returns a root element of the heap. If heap is empty, returns null.
     * @method
     * @instance
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    }

    _heapifyDown(index) {
        let largest = index;
        let left = (index << 1) + 1;
        let right = (index << 1) + 2;

        if (left <= this.heap.length && this.compare(this.heap[left], this.heap[index]) > 0) {
            largest = left;
        }

        if (right <= this.heap.length && this.compare(this.heap[right], this.heap[largest]) > 0) {
            largest = right;
        }

        if (largest !== index) {
            this._swap(index, largest);
            this._heapifyDown(largest);
        }
    }

    _heapifyUp(index) {
        let parent = index >> 1;
        if (parent >= 0) {
            if (this.compare(this.heap[index], this.heap[parent]) > 0) {
                this._swap(index, parent);
                this._heapifyUp(parent);
            }
        }
    }

    _swap(indexA, indexB) {
        let temp = this.heap[indexA];
        this.heap[indexA] = this.heap[indexB];
        this.heap[indexB] = temp;
    }

}

export {
    MaxHeap,
}
