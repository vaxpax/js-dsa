class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Appends data to the end of this list.
    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail
            this.tail.next = node;
            this.tail = node;
        }
    }

    isEmpty() {
        return this.head == null && this.tail == null;
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
    DoublyLinkedList,
    Node
};