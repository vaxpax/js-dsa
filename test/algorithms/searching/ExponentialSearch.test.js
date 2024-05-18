"use strict";

import searchTest from "./Search.test.js";
import {ExponentialSearch} from "../../../index.js";


export default function test() {
    searchTest(ExponentialSearch, 'ExponentialSearch Tests');
}

// describe('ExponentialSearch', () => {
//     test();
// });

