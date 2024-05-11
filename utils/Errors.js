"use strict";

/** @module Errors */

class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotImplementedError";
    }
}

class NotSupportedError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotSupportedError";
    }
}

class IndexOutOfBounds extends Error {
    constructor(message) {
        super(message);
        this.name = "IndexOutOfBounds";
    }
}

export {
    NotImplementedError,
    NotSupportedError,
    IndexOutOfBounds,
}
