"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const productsControllers_1 = __importDefault(require("../controllers/productsControllers"));
class ProductsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productsControllers_1.default.list); // listar todo productos
        this.router.get('/:id', productsControllers_1.default.getOne); //listar un producto
        this.router.post('/', productsControllers_1.default.create); //crear producto
        this.router.put('/:id', productsControllers_1.default.update); // editar producto
        this.router.delete('/:id', productsControllers_1.default.delete); // eliminar producto
    }
}
exports.productsRoutes = new ProductsRoutes();
exports.default = exports.productsRoutes.router;
