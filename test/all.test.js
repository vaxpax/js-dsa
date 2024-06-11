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

import queueTest from "./data-structures/queues/ArrayQueue.test.js";
import stackTest from "./data-structures/queues/ArrayStack.test.js";
import dequeTest from "./data-structures/queues/ArrayDeque.test.js";
import linkedListQueueTest from "./data-structures/queues/LinkedListQueue.test.js"
import linkedListStackTest from "./data-structures/queues/LinkedListStack.test.js"
import linkedListDequeTest from "./data-structures/queues/LinkedListDeque.test.js"
import priorityQueueTest from "./data-structures/queues/PriorityQueue.test.js"

import maxHeapTest from "./data-structures/heaps/MaxHeap.test.js"
import minHeapTest from "./data-structures/heaps/MinHeap.test.js"

import bubbleSortTest from "./algorithms/sorting/BubbleSort.test.js";
import insertionSortTest from "./algorithms/sorting/InsertionSort.test.js";
import selectionSortTest from "./algorithms/sorting/SelectionSort.test.js";
import quickSortTest from "./algorithms/sorting/QuickSort.test.js";
import mergeSortTest from "./algorithms/sorting/MergeSort.test.js";

import linearSearchTest from "./algorithms/searching/LinearSearch.test.js";
import jumpSearchTest from "./algorithms/searching/JumpSearch.test.js";
import binarySearchTest from "./algorithms/searching/BinarySearch.test.js";
import exponentialSearchTest from "./algorithms/searching/ExponentialSearch.test.js";
import ternarySearchTest from "./algorithms/searching/TernarySearch.test.js";
import interpolationSearchTest from "./algorithms/searching/InterpolationSearch.test.js";
import fibonacciSearchTest from "./algorithms/searching/FibonacciSearch.test.js";

import primeTest from "./algorithms/number-theoretical/Prime.test.js";
import gcdTest from "./algorithms/number-theoretical/GCD.test.js";

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
    dequeTest();
    linkedListQueueTest();
    linkedListStackTest();
    linkedListDequeTest();
    priorityQueueTest();

    maxHeapTest();
    minHeapTest();

    bubbleSortTest();
    insertionSortTest();
    selectionSortTest();
    quickSortTest();
    mergeSortTest();

    linearSearchTest();
    jumpSearchTest();
    binarySearchTest();
    exponentialSearchTest();
    ternarySearchTest();
    interpolationSearchTest();
    fibonacciSearchTest();

    primeTest();
    gcdTest();
});
