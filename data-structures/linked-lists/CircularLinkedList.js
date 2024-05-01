"use strict";

import { Node } from "./DoublyLinkedList.js";

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }
}

export {
    CircularLinkedList,
};

