"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { RedBlackTree, RedBlackTreeNode } from "../../../data-structures/trees/RedBlackTree.js";

export default function test() {
    describe('RedBlackTree Tests', () => {
        it('create an empty tree', () => {
            const tree = new RedBlackTree();
            assert.equal(tree.isEmpty(), true);
        });
    });
}

describe('SinglyLinkedList', () => {
    test();
});