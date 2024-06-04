"use strict";

/**@namespace trees*/

import { defaultCompare } from "../../utils/Utils.js";
import {TreeNode} from "./TreeNode.js";
import {ArrayQueue} from "../queues/ArrayQueue.js";

class TreeNodeWithParent extends TreeNode {
    constructor(key) {
        super(key)
        this.parent = null;
    }
}

/**
 * @summary Class representing BinarySearchTree
 * @classdesc
 * @memberof trees
 * */
class BinarySearchTree {
    /**
     * @class Creates a new BinarySearchTree.
     * @param {function} [compare=defaultCompare] - function to compare two keys in tree
     * @alias BinarySearchTree
     */
    constructor(compare = defaultCompare) {
        this.root = null;
        this.compare = compare;
    }

    /**
     * @summary To check if tree is empty.
     * @returns {boolean} true if tree is empty
     * @method
     * @instance
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * @summary Remove all elements from the tree.
     * @method
     * @instance
     */
    clear() {
        this.root = null;
    }

    /**
     * @summary Inserts key into tree
     * @param {*} key - key to be inserted
     * @instance
     * @method
     */
    insert(key) {
        this.root = this.insertKey(this.root, null, key);
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

    insertKey(node, parent, key) {
        if (!node) {
            node = new TreeNodeWithParent(key);
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
        if (!node || key === node.key) {
            return node;
        }
        if (this.compare(key, node.key) < 0 ) {
            return this.searchNode(node.left, key);
        } else {
            return this.searchNode(node.right, key);
        }
    }

    /**
     * Finds min (node) in tree
     * @returns {*|null} node with minimal key in tree. If tree is empty it return null;
     */
    min() {
        if (!this.root) {
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

    /**
     * Finds max (node) in tree
     * @returns {*|null} node with maximal key in tree. If tree is empty it return null
     * @method
     */
    max() {
        if (!this.root) {
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

    /**
     * @summary Finds successor of the node
     * @param {*} node - node to find successor from
     * @returns {*} successor node of provided node
     * @method
     */
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

    /**
     * @summary Finds predecessor of the node
     * @param {*} node - node to find successor from
     * @returns {*} predecessor node of provided node
     * @method
     */
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

    /**
     * @summary Delete node from tree.
     * @param {*} key - key of the node to be removed from tree
     * @method
     */
    delete(key) {
        const node = this.search(key);
        if (node) {
            this.deleteNode(node);
        }
    }

    deleteNode(node) {
        if (!node.left) {
            this.transplant(node, node.right);
        } else if (!node.right) {
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

    transplant(x, y) {
        if (!x.parent) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        if (y) {
            y.parent = x.parent
        }
    }

    /**
     * @summary Dumps tree keys into array (ordered ASC)
     * @returns {array}
     * @instance
     * @method
     */
    toSortedArray() {
        const array = [];
        if (this.root != null) {
            this.inorderTraverse(this.root, key => array.push(key));
        }
        return  array;
    }

    /**
     * @summary Dumps tree keys into array (ordered DESC)
     * @returns {array}
     * @instance
     * @method
     */
    toReverseArray() {
        const array = [];
        if (this.root != null) {
            this.inorderTraverseReversed(this.root, key => array.push(key));
        }
        return  array;
    }

    inorderTraverse(node, onNodeVisit) {
        if (node === null) {
            return;
        }
        this.inorderTraverse(node.left, onNodeVisit);
        onNodeVisit(node.key);
        this.inorderTraverse(node.right, onNodeVisit);
    }

    inorderTraverseReversed(node, onNodeVisit) {
        if (node === null) {
            return;
        }
        this.inorderTraverseReversed(node.right, onNodeVisit);
        onNodeVisit(node.key);
        this.inorderTraverseReversed(node.left, onNodeVisit);
    }

    preorderTraverse(node, onNodeVisit) {
        if (node === null) {
            return;
        }
        onNodeVisit(node.key);
        this.preorderTraverse(node.left, onNodeVisit);
        this.preorderTraverse(node.right, onNodeVisit);
    }

    postorderTraverse(node, onNodeVisit) {
        if (node === null) {
            return;
        }
        this.postorderTraverse(node.left, onNodeVisit);
        this.postorderTraverse(node.right, onNodeVisit);
        onNodeVisit(node.key);
    }

    breadthFirstSearch(onNodeVisit) {
        const queue = new ArrayQueue();
        queue.add(this.root);
        while(!queue.isEmpty()) {
            const temp = queue.poll();
            onNodeVisit(temp.key);

            if (temp.left !== null) {
                queue.add(temp.left);
            }
            if (temp.right !== null) {
                queue.add(temp.right);
            }
        }
    }
}

export {
    BinarySearchTree,
    TreeNodeWithParent,
};
