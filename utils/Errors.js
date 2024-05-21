"use strict";

/**@namespace errors*/

/**
 * @summary Class representing not implemented error.
 * @classdesc
 * @memberof errors
 */
class NotImplementedError extends Error {
    /**
     * @class Creates a new NotImplementedError.
     * @alias NotImplementedError
     * @param {String} message message for error
     * @constructor
     */
    constructor(message) {
        super(message);
        this.name = "NotImplementedError";
    }
}

/**
 * @summary Class representing not supported error.
 * @classdesc
 * @memberof errors
 */
class NotSupportedError extends Error {
    /**
     * @class Creates a new NotSupportedError.
     * @alias NotSupportedError
     * @param {String} message message for error
     * @constructor
     */
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
