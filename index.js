"use strict";

import {SinglyLinkedList} from "./data-structures/linked-lists/SinglyLinkedList.js";
import {OrderedSinglyLinkedList} from "./data-structures/linked-lists/OrderedSinglyLinkedList.js";
import {DoublyLinkedList} from "./data-structures/linked-lists/DoublyLinkedList.js";
import {OrderedDoublyLinkedList} from "./data-structures/linked-lists/OrderedDoublyLinkedList.js";
import {CircularSinglyLinkedList} from "./data-structures/linked-lists/CircularSinglyLinkedList.js";
import {CircularDoublyLinkedList} from "./data-structures/linked-lists/CircularDoublyLinkedList.js";

import {BinarySearchTree} from "./data-structures/trees/BinarySearchTree.js";
import {RedBlackTree} from "./data-structures/trees/RedBlackTree.js";
import {AVLTree} from "./data-structures/trees/AVLTree.js";
import {SplayTree} from "./data-structures/trees/SplayTree.js";

import {Trie} from "./data-structures/trie/Trie.js";

import {ArrayQueue} from "./data-structures/queues/ArrayQueue.js";
import {ArrayStack} from "./data-structures/queues/ArrayStack.js";
import {ArrayDeque} from "./data-structures/queues/ArrayDeque.js";
import {LinkedListQueue} from "./data-structures/queues/LinkedListQueue.js";
import {LinkedListStack} from "./data-structures/queues/LinkedListStack.js";
import {LinkedListDeque} from "./data-structures/queues/LinkedListDeque.js";

import {MaxHeap} from "./data-structures/heaps/MaxHeap.js";

import {LinearSearch} from "./algorithms/searching/LinearSearch.js";
import {BinarySearch} from "./algorithms/searching/BinarySearch.js";
import {ExponentialSearch} from "./algorithms/searching/ExponentialSearch.js";
import {JumpSearch} from "./algorithms/searching/JumpSearch.js";
import {TernarySearch} from "./algorithms/searching/TernarySearch.js";
import {InterpolationSearch} from "./algorithms/searching/InterpolationSearch.js";
import {FibonacciSearch} from "./algorithms/searching/FibonacciSearch.js";

import { NotImplementedError, NotSupportedError, IndexOutOfBounds} from "./utils/Errors.js"

import { defaultCompare, Order} from "./utils/Utils.js";

export {
    SinglyLinkedList,
    OrderedSinglyLinkedList,
    DoublyLinkedList,
    OrderedDoublyLinkedList,
    CircularDoublyLinkedList,
    CircularSinglyLinkedList,

    BinarySearchTree,
    RedBlackTree,
    AVLTree,
    SplayTree,

    Trie,

    ArrayQueue,
    ArrayStack,
    ArrayDeque,
    LinkedListQueue,
    LinkedListStack,
    LinkedListDeque,

    MaxHeap,

    LinearSearch,
    JumpSearch,
    BinarySearch,
    ExponentialSearch,
    TernarySearch,
    InterpolationSearch,
    FibonacciSearch,

    NotImplementedError,
    NotSupportedError,
    IndexOutOfBounds,

    defaultCompare,
    Order,
}