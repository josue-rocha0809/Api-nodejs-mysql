"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventarioRoutes = void 0;
const express_1 = require("express");
const inventarioControllers_1 = __importDefault(require("../controllers/inventarioControllers"));
class InventarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', inventarioControllers_1.default.list);
        this.router.post('/', inventarioControllers_1.default.create);
        this.router.put('/', inventarioControllers_1.default.update);
    }
}
exports.inventarioRoutes = new InventarioRoutes();
exports.default = exports.inventarioRoutes.router;
