"use strict";

/** @module queues */

/**
 * @summary Class encapsulating Stack. Stack orders elements in LIFO manner.
 * @classdesc
 */
class Stack {
    /**
     * @class Creates a new Stack.
     * @alias Stack
     * @constructor
     */
    constructor() {
        this.elements = [];
    }

    /**
     * @summary Checks if stack is empty
     * @return {boolean} true if stack is empty.
     * @method
     * @instance
     */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
     * @summary Removes all elements of the stack
     * @method
     * @instance
     */
    clear() {
        this.elements = [];
    }

    /**
     * @summary Adds the specified element into this stack (to the top)
     * @param {any}element - the element to add
     * @method
     * @instance
     */
    push(element) {
        this.elements.push(element);
    }

    /**
     * @summary Inserts the specified element, on specific index into this stack
     * @param {any} element - the element to add
     * @param {number} index - index where to insert an element
     * @method
     * @instance
     */
    insert(element, index) {
        this.elements.splice(index, 0, element);
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
        return this.elements.pop();
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
        return this.elements[this.elements.length - 1];
    }
}

export {
    Stack
}