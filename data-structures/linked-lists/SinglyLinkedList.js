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

    // Append all elements of provided array
    addAll(dataArray) {
        for (let data of dataArray) {
            this.add(data);
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

    // Returns true if this list contains the specified data.
    contains(data) {
        let index = this.indexOf(data);
        return index !== -1;
    }

    // Returns the index of the first occurrence of the data in this list,
    // or -1 if this list does not contain the element.
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

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    // Returns the index of the last occurrence of the data in this list,
    // or -1 if this list does not contain the element.
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

    // Retrieves and removes the head of this list
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

    // Retrieves and removes the tail of this list
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

    // Removes the first occurrence of the specified data from list, if it is present
    removeData(data) {
        if (!this.head) {
            return true;
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