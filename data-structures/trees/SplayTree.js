"use strict";

import { defaultCompare } from "../../utils/Utils.js";
import { TreeNode  } from "./TreeNode.js";
import {BinarySearchTree} from "./BinarySearchTree.js";

class SplayTree extends BinarySearchTree {
    constructor(compare = defaultCompare) {
        super(compare);
    }
}

export {
    SplayTree,
};