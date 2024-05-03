"use strict";

import {defaultCompare} from "../../utils/Utils.js";

class RedBlackTreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = null;
    }
}

class RedBlackTree {
    constructor(compare = defaultCompare) {
        this.root = null;
        this.compare = compare;
    }

    isEmpty() {
        return this.root === null;
    }

    clear() {
        this.root = null;
    }
}

export {
    RedBlackTree,
    RedBlackTreeNode,
};