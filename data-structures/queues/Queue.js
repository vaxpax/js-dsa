"use strict";

/**@namespace queues*/

/**
 * @summary Class encapsulating Queue. Queue orders elements in FIFO manner.
 * @classdesc
 * @memberof queues
 */
class Queue {
    /**
     * @class Creates a new Queue.
     * @alias Queue
     * @constructor
     */
    constructor() {
        this.elements = [];
    }

    /**
     * @summary Checks if queue is empty
     * @return {boolean} true if queue is empty.
     * @method
     * @instance
     */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
     * @summary Removes all elements of the queue
     * @method
     * @instance
     */
    clear() {
        this.elements = [];
    }

    /**
     * @summary Adds the specified element into this queue (to the end)
     * @param {any}element - the element to add
     * @method
     * @instance
     */
    add(element) {
        this.elements.push(element);
    }

    /**
     * @summary Inserts the specified element, on specific index into this queue
     * @param {any} element - the element to add
     * @param {number} index - index where to insert an element
     * @method
     * @instance
     */
    insert(element, index) {
        this.elements.splice(index, 0, element);
    }

    /**
     * @summary Retrieves and removes the head of this queue
     * @returns {any} head element if queue is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    remove() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.shift();
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
        return this.elements[0];
    }
}

export {
    Queue
}