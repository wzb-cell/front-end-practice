"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let createArray;
createArray = function (length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray(3, 'x');
