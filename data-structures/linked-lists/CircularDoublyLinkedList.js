"use strict";

/** @module CircularDoublyLinkedList */

import { Node } from "./DoublyLinkedList.js";

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.last = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.last = node;
            this.head.next = node;
            this.head.previous = node;
            this.last.previous = node;
            this.last.previous = node;
        } else {
            node.previous = this.last
            this.last.next = node;
            this.last = node;
            this.last.next = this.head;
            this.head.previous = this.last;
        }
    }

    appendAll(dataArray) {
        for (let data of dataArray) {
            this.append(data);
        }
    }

    // index is positive int
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
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }

        if (current === this.head) {
            this.head = this.head.next;
            this.head.previous = this.last;
            this.last.next = this.head;
        } else if (current === this.last) {
            this.last = this.last.previous;
            this.last.next = this.head;
            this.head.previous = this.last;
        } else {
            current.previous.next = current.next;
            current.next.previous = current.previous;
        }
        return current.data;
    }

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

        let current = this.head;
        while (current && current.next !== this.head) {
            if (current.data === data) {
                break;
            }
            current = current.next;
        }

        if (current === this.head) {
            this.head = this.head.next;
            this.head.previous = this.last;
            this.last.next = this.head;
        } else if (current === this.last) {
            this.last = this.last.previous;
            this.last.next = this.head;
            this.head.previous = this.last;
        } else {
            current.previous.next = current.next;
            current.next.previous = current.previous;
        }
        return current.data;
    }

    // Removes nodes from the list starting with fromIndex (inclusive) and then for length
    // length and can't be negative or zero
    // fromIndex must pe positive
    removeRange(fromIndex, length) {
        if (fromIndex < 0 || length <= 0) {
            return false;
        }
        let fromNode = this.head, toNode;
        let counter = 0;
        let correctHead = false, correctLast = false;
        while (counter < fromIndex) {
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

        fromNode.previous.next = toNode;
        toNode.previous = fromNode.previous;
        if (correctHead) {
            this.head = toNode;
        }
        if (correctLast) {
            this.last = fromNode.previous;
        }
        return true;
    }


    clear() {
        this.head = null;
        this.last = null;
    }

    contains(data) {
        return this.indexOf(data) !== -1;
    }

    isCircular() {
        return ( (this.head === this.last) ||
                    ((this.head.previous === this.last) && (this.last.next === this.head)))
    }

    isEmpty() {
        return this.head == null && this.last == null;
    }

    // returns index of data starting from list head
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
    CircularDoublyLinkedList,
};

