"use strict";

import {BinarySearchTree, TreeNode} from "./BinarySearchTree.js";
import {defaultCompare, color} from "../../utils/Utils.js";

class RedBlackTreeNode extends TreeNode {
    constructor(key) {
        super(key);
        this.color = null;
    }
}

class RedBlackTree extends BinarySearchTree {
    constructor(compare = defaultCompare) {
        super(compare);
    }

    insertKey(node, parent, key) {
        return this.insertNode(new RedBlackTreeNode(key));
    }

    insertNode(node) {
        let nodeX = this.root;
        let nodeY = null;
        while(nodeX !== null) {
            nodeY = nodeX;
            if (this.compare(node.key, nodeX.key) < 0) {
                nodeX = nodeX.left;
            } else {
                nodeX = nodeX.right;
            }
        }
        node.parent = nodeY;
        if (nodeY === null) {
            this.root = node;
        } else if (this.compare(node.key, nodeY.key) < 0) {
            nodeY.left = node;
        } else {
            nodeY.right = node;
        }
        node.left = null;
        node.right = null;
        node.color = color.RED;
        return this.insertFixup(node);
    }

    insertFixup(node) {
        let nodeY;
        while (node.parent !== null && node.parent.color === color.RED){
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
        if (nodeY.left !== null) {
            nodeY.left.parent = node;
        }
        nodeY.parent = node.parent;
        if (node.parent === null) {
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
        if (nodeY.right !== null) {
            nodeY.right.parent = node;
        }
        nodeY.parent = node.parent;

        if (node.parent === null) {
            this.root = nodeY;
        } else if (node === node.parent.left) {
            node.parent.left = nodeY;
        } else {
            node.parent.right = nodeY;
        }
        nodeY.right = node;
        node.parent = nodeY;
    }
}

export {
    RedBlackTree,
    RedBlackTreeNode,
};