"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { RedBlackTree, RedBlackTreeNode } from "../../../data-structures/trees/RedBlackTree.js";
import {color} from "../../../utils/Utils.js";

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
    });
}

describe('RedBlackTree', () => {
    test();
});

// Helper method(s) to verify RedBlackTree properties.
// To verify that tree is RedBlack.
function isRedBlackTree(tree) {
    let eachNodeIsRedOrBlackValue = eachNodeIsRedOrBlack(tree.root);
    let rootIsBlackValue = rootIsBlack(tree);
    let parentNodesRulesValue = parentNodesRules(tree.root);
    let numberOfBlackNodesValue = sameNumberOfBlackNodes(tree.root);

    return eachNodeIsRedOrBlackValue && rootIsBlackValue && parentNodesRulesValue && numberOfBlackNodesValue;
}

// Every node is either red or black
function eachNodeIsRedOrBlack(node) {
    if (node !== null) {
        if (node.color === color.RED || node.color === color.BLACK) {
            return eachNodeIsRedOrBlack(node.left) && eachNodeIsRedOrBlack(node.right);
        } else {
            return false;
        }
    }
    return true;
}

// The root is black
function rootIsBlack(tree) {
    return !(tree.root != null && tree.root.color === color.RED);
}

// If a node is red, then both its children are black
// Red nodes must not be adjacent on any path from the root to a leaf
function parentNodesRules(node) {
    if (node !== null) {
        if (node.color === color.RED && ( (node.left !== null && node.left.color === color.RED)
                                            || (node.right != null &&node.right.color === color.RED))) {
            return false;
        } else if (node.color === color.RED && node.parent.color === color.RED) {
            return false;
        } else {
            return parentNodesRules(node.left) && parentNodesRules(node.right);
        }
    }
    return true;
}

// Every path from root to leaf has the same number of black nodes
function sameNumberOfBlackNodes(node) {
    let pathBlackCountToMin = pathBlackCountToMinNode(node);
    let pathBlackCountToMax = pathBlackCountToMaxNode(node);
    if (pathBlackCountToMin !== pathBlackCountToMax) {
        // throw new TreePropertyException(String.format("Path black count to first %d does not match path black " +
        //     "count" +
        //     " to last %d",
        //     pathBlackCountToMin, pathBlackCountToMax));
        return false;
    } else {
        return verifyNumberOfBlackNodes(node, pathBlackCountToMax, 0);
    }
}

function verifyNumberOfBlackNodes(node, blackCount, pathBlackCount) {
    if (node === null && blackCount !== pathBlackCount) {
        // throw new TreePropertyException(String.format("Patch black count expected %d, patch black count found %d.",
        //     blackCount, pathBlackCount));
        return false;
    } else if (node != null) {
        pathBlackCount += (node.color === color.BLACK) ? 1 : 0;
        return verifyNumberOfBlackNodes(node.left, blackCount, pathBlackCount)
                && verifyNumberOfBlackNodes(node.right, blackCount, pathBlackCount);
    }

    return true;
}

function pathBlackCountToMinNode(node) {
    let blackCount = -1;
    while (node !== null) {
        if (node.color === color.BLACK) {
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

function pathBlackCountToMaxNode(node) {
    let blackCount = -1;
    while (node !== null) {
        if (node.color === color.BLACK) {
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