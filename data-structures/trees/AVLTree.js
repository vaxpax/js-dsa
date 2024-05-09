"use strict";

import { defaultCompare } from "../../utils/Utils.js";
import { BinarySearchTree } from "./BinarySearchTree.js";
import { NotSupportedError } from "../../utils/Errors.js";

class AVLTreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    static height(node) {
        return (node !== null) ? node.height : 0;
    }
}


class AVLTree extends BinarySearchTree {
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
        if (node === null) {
            return 0;
        }
        return AVLTreeNode.height(node.left) - AVLTreeNode.height(node.right);
    }

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

    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(root, key) {
        if (root === null) {
            return root;
        }

        if (this.compare(key, root.key) < 0) {
            root.left = this.deleteNode(root.left, key);
        } else if (this.compare(key, root.key) > 0) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if ((root.left === null) || (root.right === null)) {
                let temp;
                if (root.left === null) {
                    temp = root.right;
                } else {
                    temp = root.left;
                }

                if (temp == null) {
                    temp = root;
                    root = null;
                }
                else {
                    root = temp;
                }
            }
            else {
                let temp = this.minNode(root.right);
                root.key = temp.key;
                root.right = this.deleteNode(root.right, temp.key);
            }
        }

        if (root == null) {
            return root;
        }

        root.height = Math.max(AVLTreeNode.height(root.left), AVLTreeNode.height(root.right)) + 1;
        return this.deleteBalance(root);

    }

    deleteBalance(root) {
        const balance = this.getBalance(root);

        if (balance > 1 && this.getBalance(root.left) >= 0) {
            return this.rightRotate(root);
        }
        if (balance > 1 && this.getBalance(root.left) < 0) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
        if (balance < -1 && this.getBalance(root.right) <= 0) {
            return this.leftRotate(root);
        }
        if (balance < -1 && this.getBalance(root.right) > 0) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
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