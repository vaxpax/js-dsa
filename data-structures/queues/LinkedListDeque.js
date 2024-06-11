"use strict";

import {DoublyLinkedList} from "../linked-lists/DoublyLinkedList.js";

/**
 * @summary Class encapsulating LinkedListDeque. Underlying data-structure used is DoublyLinkedList
 * @classdesc
 * @memberof queues
 */
class LinkedListDeque {
    /**
     * @class Creates a new LinkedListDeque.
     * @alias LinkedListDeque
     * @constructor
     */
    constructor() {
        this.elements = new DoublyLinkedList();
    }

    /**
     * @summary Checks if deque is empty
     * @return {boolean} true if deque is empty.
     * @method
     * @instance
     */
    isEmpty() {
        return this.elements.isEmpty();
    }

    /**
     * @summary Removes all elements of the deque
     * @method
     * @instance
     */
    clear() {
        this.elements = new DoublyLinkedList();
    }

    /**
     * @summary Adds the specified element to the front of this deque
     * @param {any} element - the element to add
     * @method
     * @instance
     */
    addFirst(element) {
        this.elements.addFirst(element);
    }

    /**
     * @summary Adds the specified element to the end of this deque
     * @param {any} element - the element to add
     * @method
     * @instance
     */
    addLast(element) {
        this.elements.append(element);
    }

    /**
     * @summary Inserts the specified element, on specific index into this deque
     * @param {any} element - the element to add
     * @param {number} index - index where to insert an element
     * @method
     * @instance
     */
    insert(element, index) {
        this.elements.insert(element, index);
    }

    /**
     * @summary Retrieves and removes the first element of this deque, or returns null if this deque is empty.
     * @returns {any} first element if deque is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    pollFirst() {
        return this.elements.remove();
    }

    /**
     * @summary Retrieves and removes the last element of this deque, or returns null if this deque is empty.
     * @returns {any} head element if deque is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    pollLast() {
        return this.elements.removeLast();
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
        return this.elements.head.data;
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
        return this.elements.tail.data;
    }
}

export {
    LinkedListDeque
}
