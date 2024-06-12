"use strict";

import sortTest from "./Sort.test.js";
import {HeapSort} from "../../../index.js";


export default function test() {
    sortTest(HeapSort, 'HeapSort Tests');
}

// describe('HeapSort', () => {
//     test();
// });

