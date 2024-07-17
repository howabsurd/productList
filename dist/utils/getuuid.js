"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = void 0;
const { v4: uuidv4 } = require('uuid');
const generateUUID = () => {
    return uuidv4();
};
exports.generateUUID = generateUUID;
