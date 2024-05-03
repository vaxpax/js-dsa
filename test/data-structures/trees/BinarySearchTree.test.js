"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { BinarySearchTree, TreeNode } from "../../../data-structures/trees/BinarySearchTree.js";



export default function test() {
    describe('BinarySearchTree Tests', () => {
        it('create an empty tree', () => {
            const tree = new BinarySearchTree();
            assert.equal(tree.isEmpty(), true);
        });
        it('insert one value', () => {
            const tree = new BinarySearchTree();
            tree.insert(5);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.key, 5);
        });
        it('insertAll, toInOrderArray, toReverseOrderArray', () => {
            const tree = new BinarySearchTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.key, 4);
            assertArrays(array.sort(), tree.toInOrderArray());
            assertArrays(array.reverse(), tree.toReverseOrderArray());
        });

        it('search', () => {
            const tree = new BinarySearchTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(4, tree.search(4).key)
            assert.equal(1, tree.search(1).key)
            assert.equal(3, tree.search(3).key)
        });

        it('min', () => {
            const tree = new BinarySearchTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.min().key, 1);
        });

        it('max', () => {
            const tree = new BinarySearchTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.max().key, 6);
        });
    });
}

describe('SinglyLinkedList', () => {
     test();
 });