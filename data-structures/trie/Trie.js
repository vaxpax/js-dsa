"use strict";

/**@namespace trie*/

class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

/**
 * @summary Class representing Trie
 * @classdesc
 * @memberof trie
 * */
class Trie {
    /**
     * @class Creates a new Trie.
     * @alias Trie
     */
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @summary To check if trie is empty.
     * @returns {boolean} true if trie is empty
     * @method
     * @instance
     */
    isEmpty() {
        return this._isEmpty(this.root)
    }

    _isEmpty(node) {
        return node.children.size === 0;
    }

    /**
     * @summary Remove all elements from trie.
     * @method
     * @instance
     */
    clear() {
        this.root = new TrieNode();
    }

    /**
     * @summary Inserts new word into trie
     * @param {String} word - word to be inserted in trie
     * @instance
     * @method
     */
    insert(word) {
        let current = this.root;
        let char;
        for (let i = 0; i < word.length; i++) {
            char = word.charAt(i);
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }
        current.endOfWord = true;
    }

    /**
     * @summary Search word in trie
     * @param {String} word - word to search
     * @returns {boolean} true if word is found
     * @instance
     * @method
     */
    search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char);
        }
        return current.endOfWord;
    }

    /**
     * @summary Finds all words starting with prefix
     * @param {String} prefix - prefix for words we want to find
     * @returns {array} of all found words
     * @instance
     * @method
     */
    findAll(prefix) {
        const resultArray = [];

        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix.charAt(i);
            if (!current.children.has(char)) {
                return [];
            }
            current = current.children.get(char);
        }
        this._toArray(current, prefix, resultArray);
        return resultArray;
    }

    /**
     * @summary Deletes word from trie
     * @param {String} word - to be deleted
     * @returns {boolean} true if word is deleted
     * @instance
     * @method
     */
    delete(word) {
        let current = this.root;
        const stack = [];
        for (const char of word) {
            if (!current.children.has(char)){
                return false;
            }
            current = current.children.get(char);
            if (word[word.length - 1] !== char) {
                stack.push(current);
            }
        }
        current.endOfWord = false;

        while (stack.length > 0 && !current.endOfWord) {
            let previous = current;
            current = stack.pop();
            if (previous.children.size > 0) {
                break;
            }
            current.children.delete(previous.children.keys()[0]);
        }
        return true;
    }

    /**
     * @summary Dump all words to an array
     * @returns {array} of all words
     * @instance
     * @method
     */
    toArray() {
        let array = [];
        this._toArray(this.root, "", array);
        return array;
    }

    _toArray(node, prefix, array) {
        if (node.endOfWord) {
            array.push(prefix);
        }
        for (let char of node.children.keys()) {
            this._toArray(node.children.get(char), prefix + char, array);
        }
    }
}

export {
    Trie,
    TrieNode,
};