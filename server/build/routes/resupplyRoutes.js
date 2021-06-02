"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resupplyRoutes = void 0;
const express_1 = require("express");
const resupplyControllers_1 = __importDefault(require("../controllers/resupplyControllers"));
class ResupplyRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', resupplyControllers_1.default.list); // listar todo productos
        this.router.get('/:id', resupplyControllers_1.default.getOne); //listar un producto
        this.router.post('/', resupplyControllers_1.default.create); //crear producto
        this.router.put('/:id', resupplyControllers_1.default.update); // editar producto
        this.router.delete('/:id', resupplyControllers_1.default.delete); // eliminar producto
        this.router.delete('/pro/:id', resupplyControllers_1.default.deletePro); // eliminar producto
    }
}
exports.resupplyRoutes = new ResupplyRoutes();
exports.default = exports.resupplyRoutes.router;
