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


export {
    NotImplementedError,
    NotSupportedError,
}
