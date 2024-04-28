"use strict";

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // We track tail to speed up add data to the end of list
    }

    // Appends data to the end of this list.
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    // Inserts the specified element at the beginning of this list.
    addFirst(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    // Remove all elements from the list
    clear() {
        this.head = null;
        this.tail = null;
    }

    // Retrieves and removes the head of this list
    remove() {
        if (this.head == null) {
            return null;
        }

        let node = this.head;
        if (this.head === this.tail) {
            this.clear();
        } else {
            this.head = this.head.next;
        }
        return node.data;
    }

    // Retrieves and removes the tail of this list
    removeLast() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        if (this.head === this.tail) {
            this.clear();
            return current.data;
        } else {
            let previous = current;
            current = current.next;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
            this.tail = previous;
            return current.data;
        }
    }

    // Replaces the data at the specified position in list with the specified data
    // Returns previous data on specific index
    set(index, data) {
        if (this.head == null) {
            return null;
        } else {
            let current = this.head;
            let counter = 0;
            while (current.next && counter < index) {
                current = current.next;
                counter++;
            }
            if (counter !== index) {
                return null;
            } else {
                let foundData = current.data;
                current.data = data;
                return foundData;
            }
        }

    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    [Symbol.iterator](){
        let current = this.head;
        return {
            next(){
                if (!current) {
                    return {
                        done: true,
                        value: undefined
                    }
                }
                const returnValue = {
                    done: false,
                    value: current.data
                };
                current = current.next;
                return returnValue
            }
        }
    }

    toArray() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

export {SinglyLinkedList}