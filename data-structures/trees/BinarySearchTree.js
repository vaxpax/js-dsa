"use strict";

import { defaultCompare } from "../../utils/Utils.js";

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(compare = defaultCompare) {
        this.root = null;
        this.compare = compare;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        this.root = this.insertValue(this.root, value);
    }

    insertAll(valuesArray) {
        for (let value of valuesArray) {
            this.insert(value);
        }
    }

    insertValue(node, value) {
        if (node === null) {
            node = new TreeNode(value);
            return node;
        }
        if (this.compare(value, node.value) < 0) {
            node.left = this.insertValue(node.left, value);
        } else if (this.compare(value, node.value) > 0) {
            node.right = this.insertValue(node.right, value)
        }
        return node;
    }
}

export {
    BinarySearchTree,
    TreeNode,
};