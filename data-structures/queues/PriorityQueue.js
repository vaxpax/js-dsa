"use strict";

/**@namespace queues*/

import {defaultCompare} from "../../utils/Utils.js";
import {MaxHeap} from "../heaps/MaxHeap.js";
import {MinHeap} from "../heaps/MinHeap.js";

/**
 * @summary Class encapsulating PriorityQueue.
 * @classdesc
 * @memberof queues
 */
class PriorityQueue {
    /**
     * @class Creates a new ArrayDeque.
     * @alias PriorityQueue
     * @constructor
     */
    constructor(type = PriorityQueueType.MAX, dataArray = [], compare = defaultCompare) {
        switch (type) {
            default:
            case PriorityQueueType.MAX:
                this.queue = new MaxHeap(dataArray, compare);
                break
            case PriorityQueueType.MIN:
                this.queue = new MinHeap(dataArray, compare);
                break;
        }
    }

    /**
     * @summary Check if heap is empty
     * @returns {boolean} True if heap i empty
     * @method
     * @instance
     */
    isEmpty() {
        return this.queue.isEmpty();
    }

    /**
     * @summary Pushes an element to this PriorityQueue
     * @param {*} element - Element to insert in heap.
     * @method
     * @instance
     */
    push(element) {
        this.queue.push(element);
    }

    /**
     * @summary Returns and removes a root element of the PriorityQueue
     * @returns {*} Returns a root element of the heap. If PriorityQueue is empty, returns null.
     * @method
     * @instance
     */
    pop() {
        return this.queue.pop();
    }

    /**
     * @summary Returns a root element of the PriorityQueue
     * @returns {*} Returns a root element of the PriorityQueue. If PriorityQueue is empty, returns null.
     * @method
     * @instance
     */
    peek() {
        return this.queue.peek();
    }

    /**
     * @summary Swap old element with new one in PriorityQueue
     * @param {*} oldElement - Element to be swapped
     * @param {*} newElement - Element to swap with
     * @method
     * @instance
     */
    swap(oldElement, newElement) {
        this.queue.swap(oldElement, newElement);
    }

    /**
     * @summary Finds index of an element in PriorityQueue
     * @param {*} element - Element to find index for
     * @returns {number} - Index (>=0) of an element in PriorityQueue if it exists, or -1 if element is not in
     * PriorityQueue
     * @method
     * @instance
     */
    findIndex(element) {
        return this.queue.heap.findIndex(e => e === element);
    }

    /**
     * @summary Check if PriorityQueue contains element
     * @param {*} element - Element to insert in heap.
     * @returns {boolean} - True is element exist, otherwise false
     * @method
     * @instance
     */
    contains(element) {
        return this.findIndex(element) !== -1;
    }
}

/**
 * @summary Object defining  or DESC order
 * @type {Readonly<{MIN: number, MAX: number}>}
 * @enum
 */
const PriorityQueueType = Object.freeze({
    MIN: 0,
    MAX: 1
})

export {
    PriorityQueue,
    PriorityQueueType,
}

