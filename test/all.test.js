import singlyLinkedListTest from "./data-structures/linked-lists/SinglyLinkedList.test.js";
import orderedSinglyLinkedListTest from "./data-structures/linked-lists/OrderedSinglyLinkedList.test.js";
import doublyLinkedListTest from "./data-structures/linked-lists/DoublyLinkedList.test.js";

describe('All Tests', () =>{
    singlyLinkedListTest();
    orderedSinglyLinkedListTest();
    doublyLinkedListTest();
});