"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateClientUseCase = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateClientUseCase {
    execute({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield prismaClient_1.prisma.clients.findFirst({
                where: {
                    username: username
                }
            });
            if (!client) {
                throw new Error('Username or password invalid');
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, client.password);
            if (!passwordMatch) {
                throw new Error('Username or password invalid');
            }
            const token = (0, jsonwebtoken_1.sign)({ username }, '00aac3a0bbb02848bfcf4c02b4e45fe8', {
                subject: client.id,
                expiresIn: '1d'
            });
            return token;
        });
    }
}
exports.AuthenticateClientUseCase = AuthenticateClientUseCase;
