"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
app.listen(PORT || 3000, () => console.log(`app listening on port 3000`));
