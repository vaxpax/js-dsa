"use strict";

/** @module RedBlackTree */

import {defaultCompare} from "../../utils/Utils.js";
import {TreeNodeWithParent} from "./BinarySearchTree.js";
import {NotSupportedError} from "../../utils/Errors.js";

class RedBlackTreeNode extends TreeNodeWithParent {
    constructor(key) {
        super(key);
        this.color = Color.BLACK;
    }
}

/**
 * @summary Class representing RedBlackTree
 * @classdesc
 * */
class RedBlackTree {
    /**
     * @class Creates a new RedBlackTree.
     * @param {function} compare - Function to compare two keys in tree
     * @alias RedBlackTree
     * @constructor
     */
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

    /**
     * @summary To check if tree is empty.
     * @returns {boolean} true if tree is empty
     * @method
     * @instance
     */
    isEmpty() {
        return this.root === this.NULL;
    }

    /**
     * @summary Remove all elements from the list.
     * @method
     * @instance
     */
    clear() {
        this.root = this.NULL;
    }

    /**
     * @summary Inserts key into tree
     * @param {*} key - key to be inserted
     * @instance
     * @method
     */
    insert(key) {
        this.root = this.insertKey(this.root, key);
    }

    /**
     * @summary Inserts array of key into tree
     * @param {array} keysArray - array of keys to add to the tree
     * @instance
     * @method
     */
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

    insertNode(node) {
        let x = this.root;
        let y = this.NULL;
        while(x !== this.NULL) {
            y = x;
            if (this.compare(node.key, x.key) < 0) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        node.parent = y;
        if (y === this.NULL) {
            this.root = node;
        } else if (this.compare(node.key, y.key) < 0) {
            y.left = node;
        } else {
            y.right = node;
        }
        node.left = this.NULL;
        node.right = this.NULL;
        node.color = Color.RED;
        return this.insertFixup(node);
    }

    insertFixup(node) {
        let y;
        while (node.parent.color === Color.RED){
            if (node.parent === node.parent.parent.left) {
                y = node.parent.parent.right;
                if (y !== null && y.color === Color.RED) {
                    node.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.rightRotate(node.parent.parent);
                }
            } else {
                y = node.parent.parent.left;
                if (y!== null && y.color === Color.RED) {
                    node.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    if (node = node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = Color.BLACK;
        return this.root;
    }

    leftRotate(node) {
        let y = node.right;
        node.right = y.left;
        if (y.left !== this.NULL) {
            y.left.parent = node;
        }
        y.parent = node.parent;
        if (node.parent === this.NULL) {
            this.root = y;
        } else if (node === node.parent.left) {
            node.parent.left = y;
        } else {
            node.parent.right = y;
        }
        y.left = node;
        node.parent = y;
    }

    rightRotate(node) {
        let y = node.left;
        node.left = y.right;
        if (y.right !== this.NULL) {
            y.right.parent = node;
        }
        y.parent = node.parent;

        if (node.parent === this.NULL) {
            this.root = y;
        } else if (node === node.parent.left) {
            node.parent.left = y;
        } else {
            node.parent.right = y;
        }
        y.right = node;
        node.parent = y;
    }

    /**
     * @summary Delete node from tree.
     * @param {*} key - key of the node to be removed from tree
     * @method
     */
    delete(key) {
        let node = this.search(key);
        if (node !== this.NULL) {
            this.deleteNode(node)
        }
    }

    deleteNode(node) {
        let y = node, x = this.NULL;
        let yOriginalColor = y.color;
        if (node.left === this.NULL) {
            x = node.right;
            this.transplant(node, node.right);
        } else if (node.right === this.NULL) {
            x = node.left;
            this.transplant(node, node.left);
        } else {
            y = this.minNode(node.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent === node) {
                x.parent = y;
            } else {
                this.transplant(y, y.right);
                y.right = node.right;
                y.right.parent = y;
            }

            this.transplant(node, y);
            y.left = node.left;
            y.left.parent = y;
            y.color = node.color;
        }
        if (yOriginalColor === Color.BLACK) {
            this.deleteFixup(x);
        }
    }

    deleteFixup(node) {
        let y;
        while (node !== this.root && node.color === Color.BLACK) {
            if (node === node.parent.left) {
                y = node.parent.right;
                if (y.color === Color.RED) {
                    y.color = Color.BLACK;
                    node.parent.color = Color.RED;
                    this.leftRotate(node.parent);
                    y = node.parent.right;
                }
                if (y.left.color === Color.BLACK && y.right.color === Color.BLACK) {
                    y.color = Color.RED;
                    node = node.parent;
                } else {
                    if (y.right.color === Color.BLACK) {
                        y.left.color = Color.BLACK;
                        y.color = Color.RED;
                        this.rightRotate(y);
                        y = node.parent.right;
                    }
                    y.color = node.parent.color;
                    node.parent.color = Color.BLACK;
                    y.right.color = Color.BLACK;
                    this.leftRotate(node.parent);
                    node = this.root;
                }
            } else {
                y = node.parent.left;
                if (y.color === Color.RED) {
                    y.color = Color.BLACK;
                    node.parent.color = Color.RED;
                    this.rightRotate(node.parent);
                    y = node.parent.left;
                }
                if (y.left.color === Color.BLACK && y.right.color === Color.BLACK) {
                    y.color = Color.RED;
                    node = node.parent;
                } else {
                    if (y.left.color === Color.BLACK) {
                        y.right.color = Color.BLACK;
                        y.color = Color.RED;
                        this.leftRotate(y);
                        y = node.parent.left;
                    }
                    y.color = node.parent.color;
                    node.parent.color = Color.BLACK;
                    y.left.color = Color.BLACK;
                    this.rightRotate(node.parent);
                    node = this.root;
                }
            }
        }
        node.color = Color.BLACK;
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

    /**
     * @summary Dumps tree keys into array (ordered ASC)
     * @returns {array}
     * @instance
     * @method
     */
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

    /**
     * @summary Dumps tree keys into array (ordered DESC)
     * @returns {array}
     * @instance
     * @method
     */
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

    /**
     * Finds min (node) in tree
     * @returns {*|null} node with minimal key in tree. If tree is empty it return null;
     * @method
     */
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

    /**
     * Finds max (node) in tree
     * @returns {*|null} node with maximal key in tree. If tree is empty it return null
     * @method
     */
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
        throw new NotSupportedError('RedBlackTree.successor()');
    }
    predecessor(node) {
        throw new NotSupportedError('RedBlackTree.predecessor()');
    }

    /**
     * @summary Search for node.
     * @param {*} key - Key to be found in Tree
     * @returns {*|null} node with given key if found. Otherwise, returns null
     * @instance
     * @method
     */
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


const Color = Object.freeze({
    RED: 0,
    BLACK: 1
})

export {
    RedBlackTree,
    RedBlackTreeNode,
    Color,
};