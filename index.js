"use strict";

import { SinglyLinkedList } from "./data-structures/linked-lists/SinglyLinkedList.js";
import { OrderedSinglyLinkedList } from "./data-structures/linked-lists/OrderedSinglyLinkedList.js";
import { DoublyLinkedList } from "./data-structures/linked-lists/DoublyLinkedList.js";
import { OrderedDoublyLinkedList } from "./data-structures/linked-lists/OrderedDoublyLinkedList.js";
import { CircularSinglyLinkedList } from "./data-structures/linked-lists/CircularSinglyLinkedList.js";
import { CircularLinkedList } from "./data-structures/linked-lists/CircularLinkedList.js";

import { BinarySearchTree } from "./data-structures/trees/BinarySearchTree.js";

import { defaultCompare, Order} from "./utils/Utils.js";

export {
    SinglyLinkedList,
    OrderedSinglyLinkedList,
    DoublyLinkedList,
    OrderedDoublyLinkedList,
    CircularLinkedList,
    CircularSinglyLinkedList,

    BinarySearchTree,

    defaultCompare,
    Order,
}




// Playground (delete at end)
//  const list = new OrderedSinglyLinkedList();
//  const array = [99, 4, 6, 7, 55];
//  list.addAll(array);
//
//  list.set(0, 12);
//
// for(let item of list) {
//     console.log(item);
// }
