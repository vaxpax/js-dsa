"use strict";

import { defaultCompare } from "../../utils/Utils.js";

class TreeNode {
    constructor(key) {
        this.key = key;
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

    insert(key) {
        this.root = this.insertValue(this.root, key);
    }

    insertAll(keysArray) {
        for (let key of keysArray) {
            this.insert(key);
        }
    }

    insertValue(node, key) {
        if (node === null) {
            node = new TreeNode(key);
            return node;
        }
        if (this.compare(key, node.key) < 0) {
            node.left = this.insertValue(node.left, key);
        } else if (this.compare(key, node.key) > 0) {
            node.right = this.insertValue(node.right, key)
        }
        return node;
    }

    toInOrderArray() {
        const array = [];
        if (this.root != null) {
            this.inOrderTreeWalk(this.root, array);
        }
        return  array;
    }

    inOrderTreeWalk(node, array) {
        if (node != null) {
            this.inOrderTreeWalk(node.left, array);
            array.push(node.key);
            this.inOrderTreeWalk(node.right, array);
        }
    }

    toReverseOrderArray() {
        const array = [];
        if (this.root != null) {
            this.reverseOrderTreeWalk(this.root, array);
        }
        return  array;
    }

    reverseOrderTreeWalk(node, array) {
        if (node != null) {
            this.reverseOrderTreeWalk(node.right, array);
            array.push(node.key);
            this.reverseOrderTreeWalk(node.left, array);
        }
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
        if (node == null || key === node.key) {
            return node;
        }
        if (this.compare(key, node.key) < 0 ) {
            return this.searchNode(node.left, key);
        } else {
            return this.searchNode(node.right, key);
        }
    }

    min() {
        if (this.root == null) {
            return null;
        }
        return this.minNode(this.root);
    }

    minNode(node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

    max() {
        if (this.root == null) {
            return null;
        }
        return this.maxNode(this.root);
    }

    maxNode(node) {
        while (node.right != null) {
            node = node.right;
        }
        return node;
    }
}

export {
    BinarySearchTree,
    TreeNode,
};