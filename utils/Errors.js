"use strict";

/** @module Errors */

/**
 * @summary Class representing not implemented error. It is thrown if some method is not implemented in class
 */
class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotImplementedError";
    }
}

/**
 * @summary Class representing not supported error. It is thrown if some method is not supported in class.
 */
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
