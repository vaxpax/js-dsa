"use strict";

/** Class representing a Node of SinglyLinkedList */
class Node {
    /**
     * Create a Node.
     * @param {*} data - The data to store in Node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/** Class representing SinglyLinkedList */
class SinglyLinkedList {
    /**
     * Create a SinglyLinkedList.
     */
    constructor() {
        this.head = null;
        this.tail = null; // We track tail to speed up add data to the end of list
    }

    /**
     * Appends data to the end of this list.
     * @param {*} data - The data to store in new Node.
      */
    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    /**
     * Appends element of an array to the end of this list.
     * @param {array} dataArray - The array of data to be appended to the list.
     */
    appendAll(dataArray) {
        for (let data of dataArray) {
            this.append(data);
        }
    }

    /**
     * Inserts the specified element at the beginning of this list.
     * @param {*} data - The data to be added at head of the list.
     */
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

    /**
     *  Remove all elements from the list.
     */
    clear() {
        this.head = null;
        this.tail = null;
    }

    /**
     * To check if list contains some data
     * @param {*} data
     * @returns {boolean} true if this list contains the specified data.
     */
    contains(data) {
        let index = this.indexOf(data);
        return index !== -1;
    }

    /**
     * To find index of first occurrence of the data in the List.
     * @param {*} data - The data to be found in the list
     * @returns {number} the index of the first occurrence of the data in this list, or -1 if this list does not contain the element
     */
    indexOf(data) {
        let index = -1;
        let counter = 0;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                index = counter;
                break;
            }
            counter++;
            current = current.next;
        }
        return index;
    }

    /**
     * To check if list is empty.
     * @returns {boolean} true if list is empty
     */
    isEmpty() {
        return this.head == null && this.tail == null;
    }

    /**
     * To find index of last occurrence of the data in the List.
     * @param {*} data - The data to be found in the list
     * @returns {number} the index of the last occurrence of the data in this list, or -1 if this list does not contain the element
     */
    lastIndexOf(data) {
        let index = -1;
        let counter = 0;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                index = counter;
            }
            counter++;
            current = current.next;
        }
        return index;
    }

    /**
     * To remove the head of this list.
     * @returns {*|null} Node data if list is not empty. Otherwise, returns null
     */
    remove() {
        if (!this.head) {
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

    /**
     * To remove the tail of this list
     * @returns {*|null} tail data if list is not empty. Otherwise, returns null
     */
    removeLast() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        if (this.head === this.tail) {
            this.clear();
            return current.data;
        }
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

    /**
     * To remove first occurrence of the specified data from list
     * @param data - The data to be removed
     * @returns {boolean} true if data is present. Otherwise, it returns false
     */
    removeData(data) {
        if (!this.head) {
            return false;
        }

        let previous = null;
        let current = this.head;
        let found = false;
        while (current) {
            if (current.data === data) {
                found = true;
                break;
            }
            previous = current;
            current = current.next;
        }
        if (!found) {
            return false;
        }

        if(previous == null) {  // we found it on head
            if (this.tail === this.head) {
                clear();
                return true;
            }
            this.head = this.head.next;
            return true;
        }

        previous.next = current.next;
        if (current === this.tail) {
            this.tail = previous;
        }
        return true;
    }


    /**
     * Replace data at specified position in the list
     * @param {number}index - The position in the list where to replace data. Must be positive integer
     * @param {*}data - The data to replace
     * @returns {*|null} if found data of the node, otherwise null
     */
    // Replaces the data at the specified position in list with the specified data
    // Returns previous data on specific index
    set(index, data) {
        if (!this.head) {
            let node = new Node(data);
            this.head = node;
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

    /**
     * Dump list to the array
     * @returns {array} array of list elements
     */
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

export {
    SinglyLinkedList,
    Node
};