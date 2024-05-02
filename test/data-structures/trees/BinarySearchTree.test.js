"use strict";

import { assert } from "chai";
import { BinarySearchTree} from "../../../data-structures/trees/BinarySearchTree.js";



export default function test() {
    describe('CircularLinkedList Tests', () => {
        it('create an empty tree', () => {
            const tree = new BinarySearchTree();
            assert.equal(tree.isEmpty(), true);
        });
    });
}

describe('SinglyLinkedList', () => {
     test();
 });