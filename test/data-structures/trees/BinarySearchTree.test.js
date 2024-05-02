"use strict";

import { assert } from "chai";
import { BinarySearchTree} from "../../../data-structures/trees/BinarySearchTree.js";



export default function test() {
    describe('CircularLinkedList Tests', () => {
        it('create an empty tree', () => {
            const tree = new BinarySearchTree();
            assert.equal(tree.isEmpty(), true);
        });
        it('insert one value', () => {
            const tree = new BinarySearchTree();
            tree.insert(5);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.value, 5);
        });
        it('insertAll', () => {
            const tree = new BinarySearchTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.value, 5);
        });


    });
}

describe('SinglyLinkedList', () => {
     test();
 });