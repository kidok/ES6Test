"use strict"

class Reader {
    constructor() {
        this._cb = {};
    }
    get cb() {
        return this._cb
    }

    set cb(value) {
        this._cb = value;
    }

    read(cb) {
        const fs = require("fs");
        fs.readFile("a.txt", "utf-8", (err, data) => {
            cb(data);
        });
    }
}

module.exports = Reader;