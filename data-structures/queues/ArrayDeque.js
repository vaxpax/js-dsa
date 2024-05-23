"use strict";

/**@namespace queues*/

/**
 * @summary Class encapsulating ArrayDeque.
 * @classdesc
 * @memberof queues
 */
class ArrayDeque {
    /**
     * @class Creates a new ArrayDeque.
     * @alias ArrayDeque
     * @constructor
     */
    constructor() {
        this.elements = [];
    }

    /**
     * @summary Checks if deque is empty
     * @return {boolean} true if deque is empty.
     * @method
     * @instance
     */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
     * @summary Removes all elements of the deque
     * @method
     * @instance
     */
    clear() {
        this.elements = [];
    }

    /**
     * @summary Adds the specified element to the front of this deque
     * @param {any} element - the element to add
     * @method
     * @instance
     */
    addFirst(element) {
        this.elements.unshift(element);
    }

    /**
     * @summary Adds the specified element to the end of this deque
     * @param {any} element - the element to add
     * @method
     * @instance
     */
    addLast(element) {
        this.elements.push(element);
    }

    /**
     * @summary Inserts the specified element, on specific index into this deque
     * @param {any} element - the element to add
     * @param {number} index - index where to insert an element
     * @method
     * @instance
     */
    insert(element, index) {
        this.elements.splice(index, 0, element);
    }

    /**
     * @summary Retrieves and removes the first element of this deque, or returns null if this deque is empty.
     * @returns {any} first element if deque is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    pollFirst() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.shift();
    }

    /**
     * @summary Retrieves and removes the last element of this deque, or returns null if this deque is empty.
     * @returns {any} head element if deque is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    pollLast() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.pop();
    }

    /**
     * @summary Retrieves, but does not remove, the first element of this deque, or returns null if this deque is empty.
     * @returns {any} head element if deque is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    peekFirst() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements[0];
    }

    /**
     * @summary Retrieves, but does not remove, the last element of this deque, or returns null if this deque is empty
     * @returns {any} head element if deque is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    peekLast() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements[this.elements.length - 1];
    }

}

export {
    ArrayDeque
}