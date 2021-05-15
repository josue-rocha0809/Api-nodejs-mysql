"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.providersRoutes = void 0;
const express_1 = require("express");
const providersControllers_1 = __importDefault(require("../controllers/providersControllers"));
class ProvidersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', providersControllers_1.default.list); // listar todo proveedor
        this.router.get('/:id', providersControllers_1.default.getOne); //listar un proveedor
        this.router.post('/', providersControllers_1.default.create); //crear proveedor
        this.router.put('/:id', providersControllers_1.default.update); // editar proveedor
        this.router.delete('/:id', providersControllers_1.default.delete); // eliminar proveedor
    }
}
exports.providersRoutes = new ProvidersRoutes();
exports.default = exports.providersRoutes.router;
