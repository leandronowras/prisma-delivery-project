"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
test('should verify if client exists', () => {
    axios_1.default.post('http://localhost:3000/delivery', {
        id_client: 'afed5e52-801a-429c-9416-7bd53826aa08',
        item_name: 'mouse usb'
    });
});
