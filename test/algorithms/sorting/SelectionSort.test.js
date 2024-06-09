"use strict";

import sortTest from "./Sort.test.js";
import {SelectionSort} from "../../../index.js";


export default function test() {
    sortTest(SelectionSort, 'SelectionSort Tests');
}

// describe('SelectionSort', () => {
//     test();
// });

