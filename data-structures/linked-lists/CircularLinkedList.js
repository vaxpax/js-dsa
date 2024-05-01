"use strict";

import { Node } from "./DoublyLinkedList.js";

class CircularLinkedList {
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

    removeAt(index) {
        if (this.head == null) {
            return null;
        }

        if (this.head === this.head.next) {
            const data = this.head.data;
            this.clear();
            return data;
        }

        let increment = (index === 0) ? 0 : (index < 0) ? -1 : 1;
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            if (increment === 0) {
                break;
            }
            if (increment < 0) {
                current = current.previous;
            } else {
                current = current.next;
            }
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


    clear() {
        this.head = null;
        this.last = null;
    }

    isCircular() {
        return ((this.head === this.last.next) || (this.head === this.last))
             && (this.last === this.head.previous);
    }

    isEmpty() {
        return this.head == null && this.last == null;
    }

    toArray() {
        let current = this.head;
        const result = [];
        while (current && current.next !== this.head) {
            result.push(current.data);
            current = current.next;
        }
        result.push(current.data);
        return result;
    }
}

export {
    CircularLinkedList,
};

