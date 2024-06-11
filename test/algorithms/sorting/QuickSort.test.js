"use strict";

import sortTest from "./Sort.test.js";
import {QuickSort} from "../../../index.js";


export default function test() {
    sortTest(QuickSort, 'QuickSort Tests');
}

describe('QuickSort', () => {
    test();
});

