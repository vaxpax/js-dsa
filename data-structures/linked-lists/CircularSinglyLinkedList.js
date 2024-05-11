"use strict";

/** @module CircularSinglyLinkedList */

import { Node } from "./SinglyLinkedList.js";

/**
 * @summary Class representing CircularSinglyLinkedList
 * @classdesc
 * */
class CircularSinglyLinkedList {
    /**
     * @class Creates a new CircularSinglyLinkedList.
     * @alias CircularSinglyLinkedList
     * @constructor
     */
    constructor() {
        this.head = null;
        this.last = null;
    }

    /**
     * @summary
     * To check if list is empty.
     * @returns {boolean} true if list is empty
     * @method
     * @instance
     */
    isEmpty() {
        return this.head == null && this.last == null;
    }

    /**
     * Checks if list is circular
     * @returns {boolean} True if list is circular, otherwise false
     */
    isCircular() {
        return this.head === null || this.last.next === this.head;
    }

    /**
     * @summary
     *  Remove all elements from the list.
     *  @method
     *  @instance
     */
    clear() {
        this.head = null;
        this.last = null;
    }

    /**
     * @summary
     * Appends data to the end of this list.
     * @param {*} data - The data to store in new Node.
     * @method
     * @instance
     */
    append(data) {
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.last = node;
            this.head.next = this.last;
        } else {
            this.last.next = node;
            this.last = node;
            this.last.next = this.head;
        }
    }

    /**
     * @summary
     * Appends element of an array to the end of this list.
     * @param {array} dataArray - The array of data to be appended to the list.
     * @method
     * @instance
     */
    appendAll(dataArray) {
        for (let data of dataArray) {
            this.append(data);
        }
    }

    /**
     * Removes object form index position in the list
     * @param index - Index of object in the list
     * @returns {*|null} - Object if found, otherwise null
     */
    removeAt(index) {
        if (this.head == null) {
            return null;
        }
        if (this.head === this.head.next && index === 0) {
            const data = this.head.data;
            this.clear();
            return data;
        }
        let counter = 0;
        let previous = null
        let current = this.head;
        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        if (current === this.head) {
            this.head = this.head.next;
            this.last.next = this.head;
        } else if (current === this.last) {
            this.last = previous;
            this.last.next = this.head;
        } else {
            previous.next = current.next;
        }
        return current.data;
    }

    /**
     * @summary
     * To remove first occurrence of the specified data from list
     * @param data - The data to be removed
     * @returns {boolean} true if data is present. Otherwise, it returns false
     * @method
     * @instance
     */
    removeData(data) {
        if (this.head == null) {
            return false;
        }

        if (this.head === this.head.next) {
            if (data === this.head.data) {
                this.clear();
                return true;
            }
            return false;
        }

        let previous = null;
        let current = this.head;
        while (current && current.next !== this.head) {
            if (current.data === data) {
                break;
            }
            previous = current;
            current = current.next;

        }

        if (current === this.head) {
            this.head = this.head.next;
            this.last.next = this.head;
        } else if (current === this.last) {
            this.last = previous;
            this.last.next = this.head;
        } else {
            previous.next = current.next;
        }

        return true;
    }

    /**
     * Removes nodes from the list starting with fromIndex (inclusive) and then for n=length of items
     * @param fromIndex - Index from where to start removing. Must be 0 or positive integer
     * @param length - Number of elements to remove. Integer >= 0
     * @returns {boolean} if range of objects is removed
     */
    removeRange(fromIndex, length) {
        if (fromIndex < 0 || length <= 0) {
            return false;
        }
        let previous = null;
        let fromNode = this.head, toNode;
        let counter = 0;
        let correctHead = false, correctLast = false;
        while (counter < fromIndex) {
            previous = fromNode;
            fromNode = fromNode.next;
            counter++;
        }
        toNode = fromNode;
        counter = 0;
        while (counter < length) {
            if (toNode.next === fromNode) {
                // full cycle
                this.clear();
                return true;
            }
            if (toNode === this.head) {
                correctHead = true;
            }
            if (toNode === this.last) {
                correctLast = true;
            }
            toNode = toNode.next;
            counter++;
        }

        if (previous) {
            previous.next = toNode;
        }
        if (correctHead) {
            this.head = toNode;
            this.last.next = this.head;
        }
        if (correctLast) {
            this.last = previous;
        }
        return true;
    }

    /**
     * @summary
     * To check if list contains some data
     * @param {*} data
     * @returns {boolean} true if this list contains the specified data.
     * @method
     * @instance
     */
    contains(data) {
        return this.indexOf(data) !== -1;
    }

    /**
     * @summary
     * To find index of first occurrence of the data in the List.
     * @param {*} data - The data to be found in the list
     * @returns {number} the index of the first occurrence of the data in this list, or -1 if this list does not contain the element
     * @method
     * @instance
     */
    indexOf(data) {
        if (this.head == null) {
            return -1;
        }
        let current = this.head;
        let index = -1;
        let counter = 0;
        while (current) {
            if (current.data === data) {
                index = counter;
                break;
            }
            if (current.next === this.head) {
                break;
            } else {
                current = current.next;
                counter++;
            }
        }
        return index;
    }

    /**
     * @summary
     * To find index of last occurrence of the data in the List.
     * @param {*} data - The data to be found in the list
     * @returns {number} the index of the last occurrence of the data in this list, or -1 if this list does not contain the element
     * @method
     * @instance
     */
    lastIndexOf(data) {
        if (this.head == null) {
            return -1;
        }

        let current = this.head;
        let index = -1;
        let counter = 0;
        while (current) {
            if (current.data === data) {
                index = counter;
            }
            if (current.next === this.head) {
                break;
            } else {
                current = current.next;
                counter++;
            }
        }
        return index;
    }

    /**
     * @summary
     * Replace data at specified position in the list
     * @param {number}index - The position in the list where to replace data. Must be positive integer
     * @param {*}data - The data to replace
     * @returns {*|null} previous data on specific index
     * @method
     * @instance
     */
    set(index, data) {
        if (this.head == null) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        const value = current.data;
        current.data = data;
        return value;
    }

    /**
     * @summary
     * Dump list to the array
     * @returns {array} array of list elements
     * @method
     * @instance
     */
    toArray() {
        let current = this.head;
        const result = [];
        while (current && current.next !== this.head) {
            result.push(current.data);
            current = current.next;
        }
        if (current) {
            result.push(current.data);
        }
        return result;
    }
}

export {
    CircularSinglyLinkedList,
};