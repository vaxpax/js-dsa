import singlyLinkedListTest from "./data-structures/linked-lists/SinglyLinkedList.test.js";
import orderedSinglyLinkedListTest from "./data-structures/linked-lists/OrderedSinglyLinkedList.test.js";
import doublyLinkedListTest from "./data-structures/linked-lists/DoublyLinkedList.test.js";
import orderedDoublyLinkedListTest from "./data-structures/linked-lists/OrderedDoublyLinkedList.test.js";
import circularLinkedListTest from "./data-structures/linked-lists/CircularLinkedList.test.js";
import binarySearchTreeTest from "./data-structures/trees/BinarySearchTree.test.js"
import redBlackTreeTest from "./data-structures/trees/RedBlackTree.test.js"

describe('All Tests', () =>{
    singlyLinkedListTest();
    orderedSinglyLinkedListTest();
    doublyLinkedListTest();
    orderedDoublyLinkedListTest();
    circularLinkedListTest();
    binarySearchTreeTest();
    redBlackTreeTest();
});