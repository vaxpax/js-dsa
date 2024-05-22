"use strict";

import {DoublyLinkedList} from "../linked-lists/DoublyLinkedList.js";

/**
 * @summary Class encapsulating LinkedListStack. LinkedListStack orders elements in LIFO manner.
 * As underlying data-structure DoublyLinkedList is used.
 * @classdesc
 * @memberof queues
 */
class LinkedListStack {
    /**
     * @class Creates a new LinkedListStack.
     * @alias LinkedListStack
     * @constructor
     */
    constructor() {
        this.elements = new DoublyLinkedList();
    }

    /**
     * @summary Checks if stack is empty
     * @return {boolean} true if stack is empty.
     * @method
     * @instance
     */
    isEmpty() {
        return this.elements.isEmpty();
    }

    /**
     * @summary Removes all elements of the stack
     * @method
     * @instance
     */
    clear() {
        this.elements = new DoublyLinkedList();
    }

    /**
     * @summary Adds the specified element into this stack (to the top)
     * @param {any}element - the element to add
     * @method
     * @instance
     */
    push(element) {
        this.elements.append(element);
    }

    /**
     * @summary Inserts the specified element, on specific index into this stack
     * @param {any} element - the element to add
     * @param {number} index - index where to insert an element
     * @method
     * @instance
     */
    insert(element, index) {
        this.elements.insert(element, index);
    }

    /**
     * @summary Removes the object at the top of this stack and returns that object
     * @returns {any} head element if stack is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.removeLast();
    }

    /**
     * @summary Looks at the object at the top of this stack without removing it from the stack
     * @returns {any} head element if stack is not empty. Otherwise, returns null
     * @method
     * @instance
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.tail.data;
    }
}

export {
    LinkedListStack
}