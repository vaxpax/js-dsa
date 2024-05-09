"use strict";

import { assert } from "chai";
import { assertArrays } from "../../TestHelpers.js";
import { SplayTree } from "../../../index.js";

export default function test() {
    describe('SplayTree Tests', () => {
        it('create an empty tree', () => {
            const tree = new SplayTree();
            assert.equal(tree.isEmpty(), true);
        });
    });
}

describe('RedBlackTree', () => {
    test();
});