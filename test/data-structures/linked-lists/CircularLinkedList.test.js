"use strict";

import { assert } from "chai";
import {asserHeadAndTail, assertIterator, assertArrays} from "../../TestHelpers.js";
import {CircularLinkedList, defaultCompare, order} from "../../../index.js";
import {NotSupportedError} from "../../../utils/Errors.js";


export default function test() {
    describe('CircularLinkedList Tests', () => {
        it('create an empty list', () => {
            const list = new CircularLinkedList();
            assert.equal(list.isEmpty(), true);
        });

    });
}

describe('SinglyLinkedList', () => {
    test();
});

