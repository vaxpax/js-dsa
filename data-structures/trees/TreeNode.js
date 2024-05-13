"use strict";

/** @module TreeNode */

/**
 * @summary Class representing a Node of Tree
 * @variation TreeNode
 * @classdesc
 */
class TreeNode {
    /**
     * @class Create a new Node.
     * @param {*} key - The data to store in Node.
     * @alias TreeNode
     * @constructor
     */
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export {
    TreeNode
};