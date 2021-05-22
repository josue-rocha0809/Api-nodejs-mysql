"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const usersControllers_1 = __importDefault(require("../controllers/usersControllers"));
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
        this.getToken();
        this.secretInfo();
        this.secret();
    }
    config() {
        this.router.get('/', usersControllers_1.default.list);
    }
    getToken() {
        this.router.post('/singin', usersControllers_1.default.gettoken);
    }
    secretInfo() {
        this.router.post('/test', usersControllers_1.default.secretinfo);
    }
    secret() {
        this.router.post('/test', usersControllers_1.default.secret);
    }
}
exports.usersRoutes = new UsersRoutes();
exports.default = exports.usersRoutes.router;
