"use strict";

/**
 * @summary
 * Default implementation of compare function
 * @param {*} a - First object to compare
 * @param {*} b - Second object to compare
 * @returns {number}  -1 if a < b, +1 if a > b, 0 if a = b
 */
function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * @summary Object defining ASC or DESC order
 * @type {Readonly<{ASC: number, DESC: number}>}
 * @enum
 */
const Order = Object.freeze({
    ASC: 0,
    DESC: 1
})

export {
    defaultCompare,
    Order,
};