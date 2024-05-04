function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

const order = Object.freeze({
    ASC: 0,
    DESC: 1
})

const color = Object.freeze({
    RED: 0,
    BLACK: 1
})

export {
    defaultCompare,
    order,
    color,
};