"use strict";

import { defaultCompare } from "../../utils/Utils.js";

class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.parent = null;
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

    clear() {
        this.root = null;
    }

    insert(key) {
        this.root = this.insertKey(this.root, null, key);
    }

    insertAll(keysArray) {
        for (let key of keysArray) {
            this.insert(key);
        }
    }

    insertKey(node, parent, key) {
        if (node === null) {
            node = new TreeNode(key);
            node.parent = parent;
            return node;
        }
        if (this.compare(key, node.key) < 0) {
            node.left = this.insertKey(node.left, node, key);
        } else if (this.compare(key, node.key) > 0) {
            node.right = this.insertKey(node.right, node, key)
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

    successor(node) {
        if (node.right != null) {
            return this.minNode(node.right);
        }

        let key = node.key;
        let parent = node.parent;
        while(parent != null && node === parent.right) {
            node = parent;
            parent = node.parent;
        }
        return parent;
    }

    predecessor(node) {
        if (node.left != null) {
            return this.maxNode(node.left);
        }

        let parent = node.parent;
        while(parent != null && node === parent.left) {
            node = parent;
            parent = node.parent;
        }
        return parent;
    }

    delete(node) {
        if (node.left === null) {
            this.transplant(node, node.right);
        } else if (node.right === null) {
            this.transplant(node, node.left)
        } else {
            let temp = this.minNode(node.right);
            if (temp.parent !== node) {
                this.transplant(temp, temp.right);
                temp.right = node.right;
                temp.right.parent = temp;
            }
            this.transplant(node, temp);
            temp.left = node.left;
            temp.left.parent = temp;
        }
    }

    transplant(nodeU, nodeV) {
        if (nodeU.parent == null) {
            this.root = nodeV;
        } else if (nodeU === nodeU.parent.left) {
            nodeU.parent.left = nodeV;
        } else {
            nodeU.parent.right = nodeV;
        }

        if (nodeV !== null) {
            nodeV.parent = nodeU.parent
        }
    }
}

export {
    BinarySearchTree,
    TreeNode,
};