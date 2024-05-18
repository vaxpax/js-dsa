"use strict";

import searchTest from "./Search.test.js";
import {LinearSearch} from "../../../index.js";


export default function test() {
    searchTest(LinearSearch, 'LinearSearch Tests');
}

describe('LinearSearch', () => {
    test();
});

