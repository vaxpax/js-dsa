"use strict";

import sortTest from "./Sort.test.js";
import {InsertionSort} from "../../../index.js";


export default function test() {
    sortTest(InsertionSort, 'InsertionSort Tests');
}

// describe('InsertionSort', () => {
//     test();
// });

