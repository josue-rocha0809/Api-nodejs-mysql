"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRoutes = void 0;
const express_1 = require("express");
const image_controller_1 = __importDefault(require("../controllers/image.controller"));
class ImageRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', image_controller_1.default.createUser);
    }
}
exports.imageRoutes = new ImageRoutes();
exports.default = exports.imageRoutes.router;
