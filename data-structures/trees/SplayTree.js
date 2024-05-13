"use strict";

import { defaultCompare } from "../../utils/Utils.js";
import { BinarySearchTree, TreeNodeWithParent } from "./BinarySearchTree.js";

/**
 * @summary Class representing SplayTree
 * @classdesc
 * @extends BinarySearchTree
 * */
class SplayTree extends BinarySearchTree {
    /**
     * @class Creates a new AVLTree.
     * @param {function} [compare=defaultCompare] compare - Function to compare two keys in tree
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

        while (x !== null) {
            y = x;
            if (this.compare(node.key, x.key) < 0) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        // y is parent of x
        node.parent = y;
        if (y === null) {
            this.root = node;
        } else if (this.compare(node.key, y.key) < 0) {
            y.left = node;
        } else {
            y.right = node;
        }

        // splay node
        this.splay(node);
    }

    splay(x) {
        while (x.parent !== null) {
            if (x.parent.parent === null) {
                if (x === x.parent.left) {
                    // zig rotation
                    this.rightRotate(x.parent);
                } else {
                    // zag rotation
                    this.leftRotate(x.parent);
                }
            } else if (x === x.parent.left && x.parent === x.parent.parent.left) {
                // zig-zig rotation
                this.rightRotate(x.parent.parent);
                this.rightRotate(x.parent);
            } else if (x === x.parent.right && x.parent === x.parent.parent.right) {
                // zag-zag rotation
                this.leftRotate(x.parent.parent);
                this.leftRotate(x.parent);
            } else if (x === x.parent.right && x.parent === x.parent.parent.left) {
                // zig-zag rotation
                this.leftRotate(x.parent);
                this.rightRotate(x.parent);
            } else {
                // zag-zig rotation
                this.rightRotate(x.parent);
                this.leftRotate(x.parent);
            }
        }
    }

    rightRotate(x) {
        let y = x.left;
        x.left = y.right;
        if(y.right !== null) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if(x.parent === null) { //x is root
            this.root = y;
        } else if(x === x.parent.right) { //x is left child
            x.parent.right = y;
        }
        else { //x is right child
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    leftRotate(x) {
        let y = x.right;
        x.right = y.left;
        if(y.left !== null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if(x.parent === null) { //x is root
            this.root = y;
        } else if(x === x.parent.left) { //x is left child
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
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

    searchNode(n, x) {
        return this.findNode(n, x, true);
    }

    findNode(n, x, splay) {
        if (n === null) {
            return null;
        }

        if(x === n.key) {
            if (splay) {
                this.splay(n);
            }
            return n;
        }
        else if(this.compare(x, n.key) < 0) {
            return this.findNode(n.left, x, splay);
        }
        else if(this.compare(x, n.key) > 0) {
            return this.findNode(n.right, x, splay);
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

    deleteNode(x) {
        let t, s;
        this.splay(x);
        if (x.right !== null) {
            t = x.right;
            t.parent = null;
        } else {
            t = null;
        }
        s = x;
        s.right = null;
        x = null;

        // join operation
        if (s.left != null){ // remove x
            s.left.parent = null;
        }
        this.root = this.join(s.left, t);
        s = null;
    }

    join(s, t){
        if (s === null) {
            return t;
        }

        if (t === null) {
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