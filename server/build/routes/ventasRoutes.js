"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasRoutes = void 0;
const express_1 = require("express");
const ventasControllers_1 = __importDefault(require("../controllers/ventasControllers"));
class VentasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ventasControllers_1.default.list);
        this.router.post('/', ventasControllers_1.default.createVenta); //crear producto
        this.router.get('/', ventasControllers_1.default.getId); //listar un producto
        this.router.put('/', ventasControllers_1.default.update);
    }
}
exports.ventasRoutes = new VentasRoutes();
exports.default = exports.ventasRoutes.router;
