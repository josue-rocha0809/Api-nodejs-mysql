"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes2 = void 0;
const express_1 = require("express");
const productsControllers_1 = __importDefault(require("../controllers/productsControllers"));
class ProductsRoutes2 {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get(':id', productsControllers_1.default.getOne2); //listar un nombre
    }
}
exports.productsRoutes2 = new ProductsRoutes2();
exports.default = exports.productsRoutes2.router;
