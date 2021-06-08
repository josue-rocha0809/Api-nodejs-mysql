"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactosRoutes = void 0;
const express_1 = require("express");
const contactoController_1 = __importDefault(require("../controllers/contactoController"));
class contactoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', contactoController_1.default.send); //crer mensaje
    }
}
exports.contactosRoutes = new contactoRoutes();
exports.default = exports.contactosRoutes.router;
