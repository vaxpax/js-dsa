"use strict";

import singlyLinkedListTest from "./data-structures/linked-lists/SinglyLinkedList.test.js";
import circularSinglyLinkedListTest from "./data-structures/linked-lists/CircularSinglyLinkedList.test.js";
import orderedSinglyLinkedListTest from "./data-structures/linked-lists/OrderedSinglyLinkedList.test.js";
import doublyLinkedListTest from "./data-structures/linked-lists/DoublyLinkedList.test.js";
import circularDoublyLinkedListTest from "./data-structures/linked-lists/CircularDoublyLinkedList.test.js";
import orderedDoublyLinkedListTest from "./data-structures/linked-lists/OrderedDoublyLinkedList.test.js";

import binarySearchTreeTest from "./data-structures/trees/BinarySearchTree.test.js";
import redBlackTreeTest from "./data-structures/trees/RedBlackTree.test.js";
import avlTreeTest from "./data-structures/trees/AVLTree.test.js";
import splayTreeTest from "./data-structures/trees/SplayTree.test.js";

import trieTest from "./data-structures/trie/Trie.test.js";

import queueTest from "./data-structures/queues/Queue.test.js";
import stackTest from "./data-structures/queues/Stack.test.js";

import linearSearchTest from "./algorithms/searching/LinearSearch.test.js";
import jumpSearchTest from "./algorithms/searching/JumpSearch.test.js";
import binarySearchTest from "./algorithms/searching/BinarySearch.test.js";
import exponentialSearchTest from "./algorithms/searching/ExponentialSearch.test.js";
import ternarySearchTest from "./algorithms/searching/TernarySearch.test.js";
import interpolationSearchTest from "./algorithms/searching/InterpolationSearch.test.js";
import fibonacciSearchTest from "./algorithms/searching/FibonacciSearch.test.js";


describe('All Tests', () =>{
    singlyLinkedListTest();
    circularSinglyLinkedListTest();
    orderedSinglyLinkedListTest();

    doublyLinkedListTest();
    circularDoublyLinkedListTest();
    orderedDoublyLinkedListTest();

    binarySearchTreeTest();
    redBlackTreeTest();
    avlTreeTest();
    splayTreeTest();

    trieTest();

    queueTest();
    stackTest();

    linearSearchTest();
    jumpSearchTest();
    binarySearchTest();
    exponentialSearchTest();
    ternarySearchTest();
    interpolationSearchTest();
    fibonacciSearchTest();
});