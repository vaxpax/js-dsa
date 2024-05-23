"use strict";

import { defaultCompare } from "../../utils/Utils.js";
import { BinarySearchTree } from "./BinarySearchTree.js";
import { NotSupportedError } from "../../utils/Errors.js";
import {TreeNode} from "./TreeNode.js";

class AVLTreeNode extends TreeNode {
    constructor(key) {
        super(key);
        this.height = 1;
    }

    static height(node) {
        return (node !== null) ? node.height : 0;
    }
}

/**
 * @summary Class representing AVLTree
 * @classdesc
 * @extends BinarySearchTree
 * @memberof trees
 * */
class AVLTree extends BinarySearchTree {
    /**
     * @class Creates a new AVLTree.
     * @param {function} [compare=defaultCompare] function to compare two keys in tree
     * @alias AVLTree
     */
    constructor(compare = defaultCompare) {
        super(compare);
    }

    rightRotate(node) {
        let x = node.left;

        // Rotate
        let temp = x.right;
        x.right = node;
        node.left = temp;

        node.height = Math.max(AVLTreeNode.height(node.left), AVLTreeNode.height(node.right)) + 1;
        x.height = Math.max(AVLTreeNode.height(x.left), AVLTreeNode.height(x.right)) + 1;
        return x;
    }

    leftRotate(node) {
        let y = node.right;

        // Rotate
        let temp = y.left;
        y.left = node;
        node.right = temp;

        node.height = Math.max(AVLTreeNode.height(node.left), AVLTreeNode.height(node.right)) + 1;
        y.height = Math.max(AVLTreeNode.height(y.left), AVLTreeNode.height(y.right)) + 1;
        return y;
    }

    getBalance(node) {
        if (!node) {
            return 0;
        }
        return AVLTreeNode.height(node.left) - AVLTreeNode.height(node.right);
    }

    /**
     * @summary Inserts key into tree
     * @param {*} key - key to be inserted
     * @instance
     * @method
     */
    insert(key) {
        this.root = this.insertNode(this.root, key)
    }

    insertNode(node, key) {
        if (!node) {
            return new AVLTreeNode(key);
        }
        if (this.compare(key, node.key) < 0) {
            node.left = this.insertNode(node.left, key);
        } else {
            node.right = this.insertNode(node.right, key);
        }
        return this.balance(node);
    }

    /**
     * @summary Remove node from tree.
     * @param {*} key - key of the node to be removed from tree
     * @method
     */
    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(root, key) {
        if (!root) {
            return root;
        }

        if (this.compare(key, root.key) < 0) {
            root.left = this.deleteNode(root.left, key);
        } else if (this.compare(key, root.key) > 0) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (!root.left || !root.right) {
                let temp;
                if (!root.left) {
                    temp = root.right;
                } else {
                    temp = root.left;
                }
                if (!temp) {
                    temp = root;
                    root = null;
                } else {
                    root = temp;
                }
            }
            else {
                let temp = this.minNode(root.right);
                root.key = temp.key;
                root.right = this.deleteNode(root.right, temp.key);
            }
        }

        if (!root) {
            return root;
        }

        return this.balance(root);
    }

    balance(node) {
        node.height = 1 + Math.max(AVLTreeNode.height(node.left), AVLTreeNode.height(node.right));
        const balance = this.getBalance(node);

        if (this.getBalance(node) > 1) {
            if (this.getBalance(node.left) < 0) {
                node.left = this.leftRotate(node.left);
            }
            return this.rightRotate(node);
        }
        if (this.getBalance(node) < -1) {
            if (this.getBalance(node.right) > 0) {
                node.right = this.rightRotate(node.right);
            }
            return this.leftRotate(node);
        }
        return node;
    }

    successor(node) {
        throw new NotSupportedError('AVLTree.successor()');
    }
    predecessor(node) {
        throw new NotSupportedError('AVLTree.predecessor()');
    }
}

export {
    AVLTree,
    AVLTreeNode,
};