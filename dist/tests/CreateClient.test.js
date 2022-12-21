"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
test('should verify if client exists', () => {
    axios_1.default.post('http://localhost:3000/deliveryman/authenticate', {
        username: 'nowras',
        password: 'senhasecreta'
    });
});
