function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

const order = Object.freeze({
    ASC: 1,
    DESC: 2
})

export {
    defaultCompare,
    order
};