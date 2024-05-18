"use strict";

/** @module OrderedSinglyLinkedList */


import { SinglyLinkedList, Node } from "./SinglyLinkedList.js";
import { defaultCompare, Order } from "../../utils/Utils.js";
import { NotSupportedError } from "../../utils/Errors.js";

/**
 * @summary
 * Class representing OrderedSinglyLinkedList
 * @classdesc
 * @inheritDoc
 */
class OrderedSinglyLinkedList extends SinglyLinkedList {

    /**
     * @class Creates a new OrderedSinglyLinkedList.
     * @param {function} [compare=defaultCompare] function to compare two objects in document
     * @param {Order} ordering - Defines if list items should be in ASC or DESC order
     * @alias OrderedSinglyLinkedList
     * @augments SinglyLinkedList
     */
    constructor(compare = defaultCompare, ordering = Order.ASC) {
        super();
        this.compare = compare;
        this.ordering = ordering;
    }

    /**
     * @sumarry If ordering is satisfied appends element to the end of list
     * @param {*}data - The data to store in new Node.
     * @returns {boolean} - true if element added to the end of list, otherwise false
     * @method
     * @instance
     * @override
     */
    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return true;
        }

        if ( (this.compare(this.tail.data, data) < 0 && this.ordering === Order.ASC)
            || (this.compare(this.tail.data, data) > 0) && (this.ordering === Order.DESC) ) {
            this.tail.next = node;
            this.tail = node;
            return true;
        } else {
            return false;
        }
    }

    /**
     * @summary this method is not supported.
     * @method
     * @override
     * @instance
     */
    appendAll(dataArray) {
        throw new NotSupportedError('OrderedSinglyLinkedList.appendAll()');
    }

    /**
     * @summary Inserts element to the list.
     * @param {*}data - Data to be inserted to the list at appropriate position
     * @method
     * @instance
     */
    insert(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let previous = null;
            let current = this.head;
            while (current) {
                if ( (this.compare(current.data, data) < 0 && this.ordering === Order.ASC)
                    || (this.compare(current.data, data) > 0) && (this.ordering === Order.DESC) ) {
                    previous = current;
                    current = current.next;
                } else {
                    break;
                }
            }
            if (current === this.head) {
                node.next = this.head;
                this.head = node;
            } else {
                node.next = current;
                previous.next = node;
            }

            // fix tail
            if (current == null) {
                // previous is tail
                this.tail = node;
            }
        }
    }

    /**
     * @summary Inserts array of elements into the list.
     * @param {array} dataArray - Inserts array of element to the list in appropriate position
     * @method
     * @instance
     */
    insertAll(dataArray) {
        for (let item of dataArray) {
            this.insert(item);
        }
    }

    /**
     * @summary This method is not supported.
     * @method
     * @override
     * @instance
     */
    addFirst(data) {
        throw new NotSupportedError('OrderedSinglyLinkedList.addFirst()');
    }

    /**
     * @summary This method is not supported.
     * @method
     * @override
     * @instance
     */
    set(index, data) {
        throw new NotSupportedError('OrderedSinglyLinkedList.set()');
    }
}

export { OrderedSinglyLinkedList };
