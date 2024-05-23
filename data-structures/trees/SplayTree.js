"use strict";

import { defaultCompare } from "../../utils/Utils.js";
import { BinarySearchTree, TreeNodeWithParent } from "./BinarySearchTree.js";

/**
 * @summary Class representing SplayTree
 * @classdesc
 * @extends BinarySearchTree
 * @memberof trees
 * */
class SplayTree extends BinarySearchTree {
    /**
     * @class Creates a new AVLTree.
     * @param {function} [compare=defaultCompare] function to compare two keys in tree
     * @alias AVLTree
     */
    constructor(compare = defaultCompare) {
        super(compare);
    }

    /**
     * @summary Inserts key into tree
     * @param {*} key - key to be inserted
     * @instance
     * @method
     */
    insert(key) {
        this.insertNode(new TreeNodeWithParent(key));
    }

    insertNode(node) {
        let y = null;
        let x = this.root;

        while (x) {
            y = x;
            if (this.compare(node.key, x.key) < 0) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        // y is parent of x
        node.parent = y;
        if (!y) {
            this.root = node;
        } else if (this.compare(node.key, y.key) < 0) {
            y.left = node;
        } else {
            y.right = node;
        }

        // splay node
        this.splay(node);
    }

    splay(node) {
        while (node.parent) {
            if (!node.parent.parent) {
                if (node === node.parent.left) {
                    // zig rotation
                    this.rightRotate(node.parent);
                } else {
                    // zag rotation
                    this.leftRotate(node.parent);
                }
            } else if (node === node.parent.left && node.parent === node.parent.parent.left) {
                // zig-zig rotation
                this.rightRotate(node.parent.parent);
                this.rightRotate(node.parent);
            } else if (node === node.parent.right && node.parent === node.parent.parent.right) {
                // zag-zag rotation
                this.leftRotate(node.parent.parent);
                this.leftRotate(node.parent);
            } else if (node === node.parent.right && node.parent === node.parent.parent.left) {
                // zig-zag rotation
                this.leftRotate(node.parent);
                this.rightRotate(node.parent);
            } else {
                // zag-zig rotation
                this.rightRotate(node.parent);
                this.leftRotate(node.parent);
            }
        }
    }

    rightRotate(node) {
        let y = node.left;
        node.left = y.right;
        if(y.right) {
            y.right.parent = node;
        }
        y.parent = node.parent;
        if(!node.parent) { //x is root
            this.root = y;
        } else if(node === node.parent.right) { //x is left child
            node.parent.right = y;
        }
        else { //x is right child
            node.parent.left = y;
        }
        y.right = node;
        node.parent = y;
    }

    leftRotate(node) {
        let y = node.right;
        node.right = y.left;
        if(y.left) {
            y.left.parent = node;
        }
        y.parent = node.parent;
        if(!node.parent) { //x is root
            this.root = y;
        } else if(node === node.parent.left) { //x is left child
            node.parent.left = y;
        } else {
            node.parent.right = y;
        }
        y.left = node;
        node.parent = y;
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
        return this.findNode(node, key, true);
    }

    findNode(node, key, splay) {
        if (!node) {
            return null;
        }

        if(key === node.key) {
            if (splay) {
                this.splay(node);
            }
            return node;
        }
        else if(this.compare(key, node.key) < 0) {
            return this.findNode(node.left, key, splay);
        }
        else if(this.compare(key, node.key) > 0) {
            return this.findNode(node.right, key, splay);
        }

        return null;
    }

    /**
     * @summary Remove node from tree.
     * @param {*} key - key of the node to be removed from tree
     * @method
     */
    delete(key) {
        const node = this.findNode(this.root, key, false);
        if (node) {
            this.deleteNode(node);
        }
    }

    deleteNode(node) {
        let t, s;
        this.splay(node);
        if (node.right) {
            t = node.right;
            t.parent = null;
        } else {
            t = null;
        }
        s = node;
        s.right = null;
        node = null;

        // join operation
        if (s.left != null){ // remove x
            s.left.parent = null;
        }
        this.root = this.join(s.left, t);
        s = null;
    }

    join(s, t){
        if (!s) {
            return t;
        }

        if (!t) {
            return s;
        }
        let x = this.maxNode(s);
        this.splay(x);
        x.right = t;
        t.parent = x;
        return x;
    }
}

export {
    SplayTree,
};