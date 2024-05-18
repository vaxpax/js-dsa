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
import splayTreeTest from "./data-structures/trees/splayTree.test.js";

import linearSearchTest from "./algorithms/searching/LinearSearch.test.js";
import binarySearchTest from "./algorithms/searching/BinarySearch.test.js";
import interpolationSearchTest from "./algorithms/searching/InterpolationSearch.test.js";


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

    linearSearchTest();
    binarySearchTest();
    interpolationSearchTest();
});