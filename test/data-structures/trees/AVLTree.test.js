"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { AVLTreeNode } from "../../../data-structures/trees/AVLTree.js";
import { AVLTree, NotSupportedError } from "../../../index.js";

export default function test() {
    describe('AVLTree Tests', () => {
        it('create an empty tree', () => {
            const tree = new AVLTree();
            assert.equal(tree.isEmpty(), true);
            assert.equal(isAVLTree(tree.root), true);
        });
        it('insert one value and clear', () => {
            const tree = new AVLTree();
            tree.insert(5);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.key, 5);
            assert.equal(isAVLTree(tree.root), true);
            tree.clear();
            assert.equal(tree.isEmpty(), true);
        });
        it('insert 3 keys', () => {
            const tree = new AVLTree();
            const array = [5, 3, 10];
            tree.insert(array[0]);
            tree.insert(array[1]);
            tree.insert(array[2]);
            assert.equal(tree.isEmpty(), false);
            assert.equal(isAVLTree(tree.root), true);
            array.sort((a, b) => a - b);
            assertArrays(array, tree.toSortedArray());
        });
        it('insertAll', () => {
            const tree = new AVLTree();
            const array= [100, 50, 3, 25, 78, 5, 9, 12, 34, 53, 7, 4, 1, 18];
            tree.insertAll(array);
            assert.equal(isAVLTree(tree.root), true);
            array.sort((a, b) => a - b);
            assertArrays(array, tree.toSortedArray());
            array.reverse();
            assertArrays(array, tree.toReverseArray());
        });
        it('min', () => {
            const tree = new AVLTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.min().key, 1);
        });

        it('max', () => {
            const tree = new AVLTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            assert.equal(tree.max().key, 6);
        });

        it('successor', () => {
            const tree = new AVLTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            const node = tree.search(2);
            try {
                tree.successor(2);
            } catch (error) {
                assert.equal(error instanceof NotSupportedError, true);
            }
        });

        it('predecessor', () => {
            const tree = new AVLTree();
            const array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            const node = tree.search(2);
            try {
                tree.predecessor(2);
            } catch (error) {
                assert.equal(error instanceof NotSupportedError, true);
            }
        });

        it('delete', () => {
            const tree = new AVLTree();
            assert.equal(tree.isEmpty(), true);
            tree.insert(5);
            tree.delete(5);
            assert.equal(tree.isEmpty(), true);
            assert.equal(isAVLTree(tree.root), true);

            const array= [100, 50, 3, 25, 78, 5, 9, 12, 34, 53, 7, 4, 1, 18];
            tree.insertAll(array);
            array.sort((a, b) => a - b);

            tree.delete(18);
            array.splice(array.indexOf(18), 1);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);

            tree.delete(1000);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);

            tree.delete(100);
            array.splice(array.indexOf(100), 1);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);

            tree.delete(78);
            array.splice(array.indexOf(78), 1);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);

            tree.delete(9);
            array.splice(array.indexOf(9), 1);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);

            tree.delete(4);
            array.splice(array.indexOf(4), 1);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);

            tree.delete(5);
            array.splice(array.indexOf(5), 1);
            assertArrays(array, tree.toSortedArray());
            assert.equal(isAVLTree(tree.root), true);
        });

    });
}

function isAVLTree(node) {
    if (!node) {
        return true;
    }
    const leftHeight = AVLTreeNode.height(node);
    const rightHeight = AVLTreeNode.height(node);
    return Math.abs(leftHeight - rightHeight) <= 1 && isAVLTree(node.left) && isAVLTree(node.right);
}

// describe('AVLTree', () => {
//     test();
// });
