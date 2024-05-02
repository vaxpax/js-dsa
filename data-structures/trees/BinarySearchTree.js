"use strict";

import { defaultCompare } from "../../utils/Utils.js";

class TreeNode {
    constructor(value) {
        this.value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(compare = defaultCompare) {
        this.root = null;
        this.compare = defaultCompare();
    }

    isEmpty() {
        return this.root === null;
    }
}

export {
    BinarySearchTree,
    TreeNode,
};