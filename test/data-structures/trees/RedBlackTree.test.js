"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { RedBlackTree } from "../../../data-structures/trees/RedBlackTree.js";
import {Color} from "../../../utils/Utils.js";
import {BinarySearchTree} from "../../../data-structures/trees/BinarySearchTree.js";

export default function test() {
    describe('RedBlackTree Tests', () => {
        it('create an empty tree', () => {
            const tree = new RedBlackTree();
            assert.equal(tree.isEmpty(), true);
            assert.equal(isRedBlackTree(tree), true);
        });
        it('insert one value and clear', () => {
            const tree = new RedBlackTree();
            tree.insert(5);
            assert.equal(tree.isEmpty(), false);
            assert.equal(tree.root.key, 5);
            assert.equal(isRedBlackTree(tree), true);
            tree.clear();
            assert.equal(tree.isEmpty(), true);
        });
        it('insert 3 keys', () => {
            const tree = new RedBlackTree();
            const array = [5, 3, 10];
            tree.insert(array[0]);
            tree.insert(array[1]);
            tree.insert(array[2]);
            assert.equal(tree.isEmpty(), false);
            assert.equal(isRedBlackTree(tree), true);
            array.sort((a, b) => a - b);
            assertArrays(array, tree.toInOrderArray());
        });
        it('insertAll', () => {
            const tree = new RedBlackTree();
            const array= [100, 50, 3, 25, 78, 5, 9, 12, 34, 53, 7, 4, 1, 18];
            tree.insertAll(array);
            assert.equal(isRedBlackTree(tree), true);
            array.sort((a, b) => a - b);
            assertArrays(array, tree.toInOrderArray());
            array.reverse();
            assertArrays(array, tree.toReverseOrderArray());
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

        it('successor', () => {
            const tree = new BinarySearchTree();
            let array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            let node= tree.search(2);
            assert.equal(tree.successor(node).key, 3);

            tree.clear();
            array = [6, 5, 7, 2, 1, 3, 4];
            tree.insertAll(array);
            node= tree.search(5);
            assert.equal(tree.successor(node).key, 6);
            node= tree.search(7);
            assert.equal(tree.successor(node), null);

            tree.clear();
            array = [10, 2, 15, 12, 13, 14];
            tree.insertAll(array);
            node= tree.search(14);
            assert.equal(tree.successor(node).key, 15);
            node= tree.search(2);
            assert.equal(tree.successor(node).key, 10);
        });

        it('predecessor', () => {
            const tree = new BinarySearchTree();
            let array = [4, 5, 2, 3, 6, 1];
            tree.insertAll(array);
            let node= tree.search(2);
            assert.equal(tree.predecessor(node).key, 1);
            node= tree.search(3);
            assert.equal(tree.predecessor(node).key, 2);

            tree.clear();
            array = [10, 2, 15, 12, 13, 14];
            tree.insertAll(array);
            node= tree.search(2);
            assert.equal(tree.predecessor(node), null);
            node= tree.search(12);
            assert.equal(tree.predecessor(node).key, 10);
        });

        it('delete', () => {
            const tree = new RedBlackTree();
            assert.equal(tree.isEmpty(), true);
            tree.insert(5);
            tree.delete(5);
            assert.equal(tree.isEmpty(), true);
            assert.equal(isRedBlackTree(tree), true);

            const array= [100, 50, 3, 25, 78, 5, 9, 12, 34, 53, 7, 4, 1, 18];
            tree.insertAll(array);
            array.sort((a, b) => a - b);

            tree.delete(18);
            array.splice(array.indexOf(18), 1);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);

            tree.delete(1000);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);

            tree.delete(100);
            array.splice(array.indexOf(100), 1);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);

            tree.delete(78);
            array.splice(array.indexOf(78), 1);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);

            tree.delete(9);
            array.splice(array.indexOf(9), 1);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);

            tree.delete(4);
            array.splice(array.indexOf(4), 1);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);

            tree.delete(5);
            array.splice(array.indexOf(5), 1);
            assertArrays(array, tree.toInOrderArray());
            assert.equal(isRedBlackTree(tree), true);
        });
    });
}

// Helper method(s) to verify RedBlackTree properties.
// To verify that tree is RedBlack.
function isRedBlackTree(tree) {
    let eachNodeIsRedOrBlackValue = eachNodeIsRedOrBlack(tree, tree.root);
    let rootIsBlackValue = rootIsBlack(tree);
    let parentNodesRulesValue = parentNodesRules(tree, tree.root);
    let numberOfBlackNodesValue = sameNumberOfBlackNodes(tree, tree.root);
    return eachNodeIsRedOrBlackValue && rootIsBlackValue && parentNodesRulesValue && numberOfBlackNodesValue;
}

// Every node is either red or black
function eachNodeIsRedOrBlack(tree, node) {
    if (node !== tree.NULL) {
        if (node.color === Color.RED || node.color === Color.BLACK) {
            return eachNodeIsRedOrBlack(tree, node.left) && eachNodeIsRedOrBlack(tree, node.right);
        } else {
            return false;
        }
    }
    return true;
}

// The root is black
function rootIsBlack(tree) {
    return !(tree.root !== tree.NULL && tree.root.color === Color.RED);
}

// If a node is red, then both its children are black
// Red nodes must not be adjacent on any path from the root to a leaf
function parentNodesRules(tree, node) {
    if (node !== tree.NULL) {
        if (node.color === Color.RED && ( (node.left !== tree.NULL && node.left.color === Color.RED)
                                            || (node.right !== tree.NULL &&node.right.color === Color.RED))) {
            return false;
        } else if (node.color === Color.RED && node.parent.color === Color.RED) {
            return false;
        } else {
            return parentNodesRules(tree, node.left) && parentNodesRules(tree, node.right);
        }
    }
    return true;
}

// Every path from root to leaf has the same number of black nodes
function sameNumberOfBlackNodes(tree, node) {
    let pathBlackCountToMin = pathBlackCountToMinNode(tree, node);
    let pathBlackCountToMax = pathBlackCountToMaxNode(tree, node);
    if (pathBlackCountToMin !== pathBlackCountToMax) {
        // throw new TreePropertyException(String.format("Path black count to first %d does not match path black " +
        //     "count" +
        //     " to last %d",
        //     pathBlackCountToMin, pathBlackCountToMax));
        return false;
    } else {
        return verifyNumberOfBlackNodes(tree, node, pathBlackCountToMax, 0);
    }
}

function verifyNumberOfBlackNodes(tree, node, blackCount, pathBlackCount) {
    if (node === tree.NULL && blackCount !== pathBlackCount) {
        // throw new TreePropertyException(String.format("Patch black count expected %d, patch black count found %d.",
        //     blackCount, pathBlackCount));
        return false;
    } else if (node !== tree.NULL) {
        pathBlackCount += (node.color === Color.BLACK) ? 1 : 0;
        return verifyNumberOfBlackNodes(tree, node.left, blackCount, pathBlackCount)
                && verifyNumberOfBlackNodes(tree, node.right, blackCount, pathBlackCount);
    }
    return true;
}

function pathBlackCountToMinNode(tree, node) {
    let blackCount = -1;
    while (node !== tree.NULL) {
        if (node.color === Color.BLACK) {
            blackCount++;
        }
        node = node.left;
    }
    if (blackCount === -1) {
        blackCount = 0;
    } else {
        blackCount += 1;
    }
    return blackCount;
}

function pathBlackCountToMaxNode(tree, node) {
    let blackCount = -1;
    while (node !== tree.NULL) {
        if (node.color === Color.BLACK) {
            blackCount++;
        }
        node = node.right;
    }
    if (blackCount === -1) {
        blackCount = 0;
    } else {
        blackCount += 1;
    }
    return blackCount;
}

// describe('RedBlackTree', () => {
//     test();
// });