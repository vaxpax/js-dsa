"use strict";

import { assert } from "chai";
import { SinglyLinkedList } from "../../../data-structures/linked-lists/SinglyLinkedList.js";

describe('Singly Linked List Tests', () => {
    it('create an empty list', () => {
        const list = new SinglyLinkedList();
        assert.equal(list.isEmpty(), true);
    });

    it('one element list', () => {
        const list = new SinglyLinkedList();
        list.add(1);
        assert.equal(list.head.data, 1);
        assert.equal(list.tail.data, 1);

        list.remove();
        assert.equal(list.isEmpty(), true);

        list.addFirst(1);
        assert.equal(list.head.data, 1);
        assert.equal(list.tail.data, 1);
    });

});