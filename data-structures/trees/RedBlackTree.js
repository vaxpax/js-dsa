"use strict";

import {BinarySearchTree, TreeNode} from "./BinarySearchTree.js";
import {defaultCompare, Color} from "../../utils/Utils.js";

class RedBlackTreeNode extends TreeNode {
    constructor(key) {
        super(key);
        this.color = Color.BLACK;
    }
}

class RedBlackTree {
    constructor(compare = defaultCompare) {
        this.compare = compare;
        this.NULL = this.createNullNode();
        this.root = this.NULL;
    }

    createNullNode() {
        const NULLNode = new RedBlackTreeNode(null);
        NULLNode.color = Color.BLACK;
        return NULLNode;
    }

    isEmpty() {
        return this.root === this.NULL;
    }

    clear() {
        this.root = this.NULL;
    }

    insert(key) {
        this.root = this.insertKey(this.root, key);
    }

    insertAll(keysArray) {
        for (let key of keysArray) {
            this.insert(key);
        }
    }

    insertKey(node, key) {
        let newNode = new RedBlackTreeNode(key);
        newNode.left = this.NULL;
        newNode.right = this.NULL;
        newNode.parent = this.NULL;
        return this.insertNode(newNode);
    }

    insertNode(z) {
        let x = this.root;
        let y = this.NULL;
        while(x !== this.NULL) {
            y = x;
            if (this.compare(z.key, x.key) < 0) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        z.parent = y;
        if (y === this.NULL) {
            this.root = z;
        } else if (this.compare(z.key, y.key) < 0) {
            y.left = z;
        } else {
            y.right = z;
        }
        z.left = this.NULL;
        z.right = this.NULL;
        z.color = Color.RED;
        return this.insertFixup(z);
    }

    insertFixup(z) {
        let y;
        while (z.parent.color === Color.RED){
            if (z.parent === z.parent.parent.left) {
                y = z.parent.parent.right;
                if (y !== null && y.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.leftRotate(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    this.rightRotate(z.parent.parent);
                }
            } else {
                y = z.parent.parent.left;
                if (y!== null && y.color === Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z = z.parent.left) {
                        z = z.parent;
                        this.rightRotate(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    this.leftRotate(z.parent.parent);
                }
            }
        }
        this.root.color = Color.BLACK;
        return this.root;
    }

    leftRotate(z) {
        let y = z.right;
        z.right = y.left;
        if (y.left !== this.NULL) {
            y.left.parent = z;
        }
        y.parent = z.parent;
        if (z.parent === this.NULL) {
            this.root = y;
        } else if (z === z.parent.left) {
            z.parent.left = y;
        } else {
            z.parent.right = y;
        }
        y.left = z;
        z.parent = y;
    }

    rightRotate(z) {
        let y = z.left;
        z.left = y.right;
        if (y.right !== this.NULL) {
            y.right.parent = z;
        }
        y.parent = z.parent;

        if (z.parent === this.NULL) {
            this.root = y;
        } else if (z === z.parent.left) {
            z.parent.left = y;
        } else {
            z.parent.right = y;
        }
        y.right = z;
        z.parent = y;
    }

    delete(key) {
        let node = this.search(key);
        if (node !== this.NULL) {
            this.deleteNode(node)
        }
    }

    deleteNode(z) {
        let y = z, x = this.NULL;
        let yOriginalColor = y.color;
        if (z.left === this.NULL) {
            x = z.right;
            this.transplant(z, z.right);
        } else if (z.right === this.NULL) {
            x = z.left;
            this.transplant(z, z.left);
        } else {
            y = this.minNode(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent === z) {
                x.parent = y;
            } else {
                this.transplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }

            this.transplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }
        if (yOriginalColor === Color.BLACK) {
            this.deleteFixup(x);
        }
    }

    deleteFixup(z) {
        let y;
        while (z !== this.root && z.color === Color.BLACK) {
            if (z === z.parent.left) {
                y = z.parent.right;
                if (y.color === Color.RED) {
                    y.color = Color.BLACK;
                    z.parent.color = Color.RED;
                    this.leftRotate(z.parent);
                    y = z.parent.right;
                }
                if (y.left.color === Color.BLACK && y.right.color === Color.BLACK) {
                    y.color = Color.RED;
                    z = z.parent;
                } else {
                    if (y.right.color === Color.BLACK) {
                        y.left.color = Color.BLACK;
                        y.color = Color.RED;
                        this.rightRotate(y);
                        y = z.parent.right;
                    }
                    y.color = z.parent.color;
                    z.parent.color = Color.BLACK;
                    y.right.color = Color.BLACK;
                    this.leftRotate(z.parent);
                    z = this.root;
                }
            } else {
                y = z.parent.left;
                if (y.color === Color.RED) {
                    y.color = Color.BLACK;
                    z.parent.color = Color.RED;
                    this.rightRotate(z.parent);
                    y = z.parent.left;
                }
                if (y.left.color === Color.BLACK && y.right.color === Color.BLACK) {
                    y.color = Color.RED;
                    z = z.parent;
                } else {
                    if (y.left.color === Color.BLACK) {
                        y.right.color = Color.BLACK;
                        y.color = Color.RED;
                        this.leftRotate(y);
                        y = z.parent.left;
                    }
                    y.color = z.parent.color;
                    z.parent.color = Color.BLACK;
                    y.left.color = Color.BLACK;
                    this.rightRotate(z.parent);
                    z = this.root;
                }
            }
        }
        z.color = Color.BLACK;
    }

    transplant(x, y) {
        if (x.parent === this.NULL) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.parent = x.parent;
    }

    toInOrderArray() {
        const array = [];
        if (this.root !== this.NULL) {
            this.inOrderTreeWalk(this.root, array);
        }
        return  array;
    }

    inOrderTreeWalk(node, array) {
        if (node !== this.NULL) {
            this.inOrderTreeWalk(node.left, array);
            array.push(node.key);
            this.inOrderTreeWalk(node.right, array);
        }
    }

    toReverseOrderArray() {
        const array = [];
        if (this.root !== this.NULL) {
            this.reverseOrderTreeWalk(this.root, array);
        }
        return  array;
    }

    reverseOrderTreeWalk(node, array) {
        if (node !== this.NULL) {
            this.reverseOrderTreeWalk(node.right, array);
            array.push(node.key);
            this.reverseOrderTreeWalk(node.left, array);
        }
    }

    min() {
        if (this.root === this.NULL) {
            return null;
        }
        return this.minNode(this.root);
    }

    minNode(node) {
        while (node.left !== this.NULL) {
            node = node.left;
        }
        return node;
    }

    max() {
        if (this.root === this.NULL) {
            return null;
        }
        return this.maxNode(this.root);
    }

    maxNode(node) {
        while (node.right !== this.NULL) {
            node = node.right;
        }
        return node;
    }

    successor(node) {
        if (node.right !== this.NULL) {
            return this.minNode(node.right);
        }

        let key = node.key;
        let parent = node.parent;
        while(parent !== this.NULL && node === parent.right) {
            node = parent;
            parent = node.parent;
        }
        return parent;
    }

    predecessor(node) {
        if (node.left !== this.NULL) {
            return this.maxNode(node.left);
        }

        let parent = node.parent;
        while(parent !== this.NULL && node === parent.left) {
            node = parent;
            parent = node.parent;
        }
        return parent;
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
        if (node === this.NULL || key === node.key) {
            return node;
        }
        if (this.compare(key, node.key) < 0 ) {
            return this.searchNode(node.left, key);
        } else {
            return this.searchNode(node.right, key);
        }
    }
}

export {
    RedBlackTree,
    RedBlackTreeNode,
};