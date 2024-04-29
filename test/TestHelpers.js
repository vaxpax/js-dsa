import {assert} from "chai";

function asserHeadAndTail(list, head, tail) {
    assert.equal(list.head.data, head);
    assert.equal(list.tail.data, tail);
}

function assertIterator(list, array) {
    let counter = 0;
    for (let item of list) {
        assert.equal(item, array[counter]);
        counter++;
    }
}

function assertArrays(arrayA, arrayB) {
    assert.equal(arrayA.length, arrayB.length);
    for (let i = 0; i < arrayA.length; i++) {
        assert.equal(arrayA[i], arrayB[i]);
    }
}

export {
    asserHeadAndTail,
    assertIterator,
    assertArrays,
};