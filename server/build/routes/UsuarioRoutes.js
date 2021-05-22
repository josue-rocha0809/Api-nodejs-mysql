"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRoutes = void 0;
const express_1 = require("express");
const UsuariosControllers_1 = __importDefault(require("../controllers/UsuariosControllers"));
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', UsuariosControllers_1.default.list);
        this.router.get('/:id', UsuariosControllers_1.default.getOneUsuario);
    }
}
exports.usuarioRoutes = new UsuarioRoutes();
exports.default = exports.usuarioRoutes.router;
