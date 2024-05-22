"use strict";

/**@namespace queues*/

import {SinglyLinkedList} from "../linked-lists/SinglyLinkedList.js";

/**
 * @summary Class encapsulating LinkedListQueue. LinkedListQueue orders elements in FIFO manner.
 * As underlying data-structure SinglyLinkedList is used.
 * @classdesc
 * @memberof queues
 */
class LinkedListQueue {
    /**
     * @class Creates a new ArrayQueue.
     * @alias LinkedListQueue
     * @constructor
     */
    constructor() {
        this.elements = new SinglyLinkedList();
    }

    /**
     * @summary Checks if queue is empty
     * @return {boolean} true if queue is empty.
     * @method
     * @instance
     */
    isEmpty() {
        return this.elements.isEmpty();
    }

    /**
     * @summary Removes all elements of the queue
     * @method
     * @instance
     */
    clear() {
        this.elements.clear()
    }

    /**
     * @summary Adds the specified element into this queue (to the end)
     * @param {any}element - the element to add
     * @method
     * @instance
     */
    add(element) {
        this.elements.append(element);
    }

    /**
     * @summary Inserts the specified element, on specific index into this queue
     * @param {any} element - the element to add
     * @param {number} index - index where to insert an element
     * @method
     * @instance
     */
    insert(element, index) {
        this.elements.insert(element, index);
    }

    /**
     * @summary Retrieves and removes the head of this queue
     * @returns {any} head element if queue is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    remove() {
        return this.elements.remove();
    }

    /**
     * @summary Retrieves the head of this queue
     * @returns {any} head element if queue is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.head.data;
    }
}

export {
    LinkedListQueue
}