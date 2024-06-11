"use strict";

import {assertArrays} from "../../TestHelpers.js";
import {defaultCompare, Order} from "../../../utils/Utils.js";

function compareStrings(a, b) {
    return a.localeCompare(b);
}

export default function sortTest(sort, title) {
    describe(title, () => {
        it('sort empty array', () => {
            const sortAlgorithm = new sort([]);
            assertArrays([], sortAlgorithm.array);
        });
        it('Sort numbers ASC', () => {
            let numericArray = [7, 8, 100, 56, 38, 1, 4, 9, 17, 23, 24, 25, 21, 99, 3, 5, 2];
            let numericArrayASC
                = [7, 8, 100, 56, 38, 1, 4, 9, 17, 23, 24, 25, 21, 99, 3, 5, 2].sort((a, b) => a - b);
            const sortAlgorithm = new sort(numericArray);
            sortAlgorithm.sort();
            assertArrays(sortAlgorithm.array, numericArrayASC)
        });
        it('Sort numbers DESC', () => {
            let numericArray = [7, 8, 100, 56, 38, 1, 4, 9, 17, 23, 24, 25, 21, 99, 3, 5, 2];
            let numericArrayDESC
                = [7, 8, 100, 56, 38, 1, 4, 9, 17, 23, 24, 25, 21, 99, 3, 5, 2].sort((a, b) => b - a);
            const sortAlgorithm = new sort(numericArray, defaultCompare, Order.DESC);
            sortAlgorithm.sort();
            assertArrays(sortAlgorithm.array, numericArrayDESC)
        });
        it('Sort strings ASC', () => {
            let stringArray = ["John", "Antony", "Peter", "Cindy", "Beatris",  "Mark", "Nate"];
            let stringArrayASC = ["John", "Antony", "Peter", "Cindy", "Beatris",  "Mark", "Nate"].sort();
            const sortAlgorithm = new sort(stringArray);
            sortAlgorithm.sort();
            assertArrays(sortAlgorithm.array, stringArrayASC)
        });
        it('Sort strings DESC', () => {
            let stringArray = ["John", "Antony", "Peter", "Cindy", "Beatris",  "Mark", "Nate"];
            let stringArrayDESC = ["John", "Antony", "Peter", "Cindy", "Beatris",  "Mark", "Nate"].sort().reverse();
            const sortAlgorithm = new sort(stringArray, compareStrings, Order.DESC);
            sortAlgorithm.sort();
            assertArrays(sortAlgorithm.array, stringArrayDESC)
        });
    });
}

