"use strict";

import {BinarySearchTree, TreeNode} from "./BinarySearchTree.js";
import {defaultCompare, color} from "../../utils/Utils.js";

class RedBlackTreeNode extends TreeNode {
    constructor(key) {
        super(key);
        this.color = color.BLACK;
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
        NULLNode.color = color.BLACK;
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

    insertNode(node) {
        let nodeX = this.root;
        let nodeY = this.NULL;
        while(nodeX !== this.NULL) {
            nodeY = nodeX;
            if (this.compare(node.key, nodeX.key) < 0) {
                nodeX = nodeX.left;
            } else {
                nodeX = nodeX.right;
            }
        }
        node.parent = nodeY;
        if (nodeY === this.NULL) {
            this.root = node;
        } else if (this.compare(node.key, nodeY.key) < 0) {
            nodeY.left = node;
        } else {
            nodeY.right = node;
        }
        node.left = this.NULL;
        node.right = this.NULL;
        node.color = color.RED;
        return this.insertFixup(node);
    }

    insertFixup(node) {
        let nodeY;
        while (node.parent.color === color.RED){
            if (node.parent === node.parent.parent.left) {
                nodeY = node.parent.parent.right;
                if (nodeY !== null && nodeY.color === color.RED) {
                    node.parent.color = color.BLACK;
                    nodeY.color = color.BLACK;
                    node.parent.parent.color = color.RED;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }
                    node.parent.color = color.BLACK;
                    node.parent.parent.color = color.RED;
                    this.rightRotate(node.parent.parent);
                }
            } else {
                nodeY = node.parent.parent.left;
                if (nodeY!== null && nodeY.color === color.RED) {
                    node.parent.color = color.BLACK;
                    nodeY.color = color.BLACK;
                    node.parent.parent.color = color.RED;
                    node = node.parent.parent;
                } else {
                    if (node = node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = color.BLACK;
                    node.parent.parent.color = color.RED;
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = color.BLACK;
        return this.root;
    }

    leftRotate(node) {
        let nodeY = node.right;
        node.right = nodeY.left;
        if (nodeY.left !== this.NULL) {
            nodeY.left.parent = node;
        }
        nodeY.parent = node.parent;
        if (node.parent === this.NULL) {
            this.root = nodeY;
        } else if (node === node.parent.left) {
            node.parent.left = nodeY;
        } else {
            node.parent.right = nodeY;
        }
        nodeY.left = node;
        node.parent = nodeY;
    }

    rightRotate(node) {
        let nodeY = node.left;
        node.left = nodeY.right;
        if (nodeY.right !== this.NULL) {
            nodeY.right.parent = node;
        }
        nodeY.parent = node.parent;

        if (node.parent === this.NULL) {
            this.root = nodeY;
        } else if (node === node.parent.left) {
            node.parent.left = nodeY;
        } else {
            node.parent.right = nodeY;
        }
        nodeY.right = node;
        node.parent = nodeY;
    }

    delete(z) {
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
        if (yOriginalColor === color.BLACK) {
            this.deleteFixup(x);
        }
    }

    deleteFixup(x) {
        let s;
        while (x !== this.root && x.color === color.BLACK) {
            if (x === x.parent.left) {
                s = x.parent.right;
                if (s.color === color.RED) {
                    s.color = color.BLACK;
                    x.parent.color = color.RED;
                    this.leftRotate(x.parent);
                    s = x.parent.right;
                }
                if (s.left.color === color.BLACK && s.right.color === color.BLACK) {
                    s.color = color.RED;
                    x = x.parent;
                } else {
                    if (s.right.color === color.BLACK) {
                        s.left.color = color.BLACK;
                        s.color = color.RED;
                        this.rightRotate(s);
                        s = x.parent.right;
                    }
                    s.color = x.parent.color;
                    x.parent.color = color.BLACK;
                    s.right.color = color.BLACK;
                    this.leftRotate(x.parent);
                    x = this.root;
                }
            } else {
                s = x.parent.left;
                if (s.color === color.RED) {
                    s.color = color.BLACK;
                    x.parent.color = color.RED;
                    this.rightRotate(x.parent);
                    s = x.parent.left;
                }
                if (s.left.color === color.BLACK && s.right.color === color.BLACK) {
                    s.color = color.RED;
                    x = x.parent;
                } else {
                    if (s.left.color === color.BLACK) {
                        s.right.color = color.BLACK;
                        s.color = color.RED;
                        this.leftRotate(s);
                        s = x.parent.left;
                    }
                    s.color = x.parent.color;
                    x.parent.color = color.BLACK;
                    s.left.color = color.BLACK;
                    this.rightRotate(x.parent);
                    x = this.root;
                }
            }
        }
        x.color = color.BLACK;
    }

    transplant(u, v) {
        if (u.parent === this.NULL) {
            this.root = v;
        } else if (u === u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }
        v.parent = u.parent;
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