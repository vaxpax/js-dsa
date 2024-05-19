"use strict";

import { assert } from "chai";
import {assertArrays} from "../../TestHelpers.js";

import { Trie } from "../../../index.js";

const words = ["word", "work", "world", "were", "where"];

export default function test() {
    describe('Trie Tests', () => {
        it('create an empty trie', () => {
            const trie = new Trie();
            assert.equal(trie.isEmpty(), true);
        });
        it('clear', () => {
            const trie = new Trie();
            trie.insert("word");
            assert.equal(trie.isEmpty(), false);
            trie.clear();
            assert.equal(trie.isEmpty(), true);
        });
        it('insert', () => {
            const trie = new Trie();
            for (let word of words) {
                trie.insert(word);
            }
            assertArrays(words, trie.toArray());
        });
        it('search', () => {
            const trie = new Trie();
            for (let word of words) {
                trie.insert(word);
            }
            assert.equal(trie.search(words[0]), true);
            assert.equal(trie.search(words[words.length-1]), true);
            assert.equal(trie.search(words[3]), true);
            assert.equal(trie.search("w"), false);
            assert.equal(trie.search("test"), false);
        });
        it('findAll', () => {
            const trie = new Trie();
            for (let word of words) {
                trie.insert(word);
            }
            assertArrays(words, trie.findAll(""));
            assertArrays(words, trie.findAll("w"));
            assertArrays(["word", "work", "world"], trie.findAll("wor"));
            assertArrays(["work"], trie.findAll("work"));
            assertArrays(["where"], trie.findAll("wh"));
            assertArrays([], trie.findAll("t"));
        });
        it('delete', () => {
            const trie = new Trie();
            for (let word of words) {
                trie.insert(word);
            }
            assertArrays(words, trie.toArray());
            trie.insert("test");
            assertArrays(["word", "work", "world", "were", "where", "test"], trie.toArray());
            trie.delete("test");
            assertArrays(words, trie.toArray());
            assert.equal(trie.delete("word"), true);
            assertArrays(["work", "world", "were", "where"], trie.toArray());
            assert.equal(trie.delete("where"), true);
            assertArrays(["work", "world", "were"], trie.toArray());
            assert.equal(trie.delete("world"), true);
            assertArrays(["work", "were"], trie.toArray());
        });
    });
}


// describe('Trie', () => {
//     test();
// });