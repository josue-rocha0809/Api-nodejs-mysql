"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationControllers_1 = __importDefault(require("../controllers/authenticationControllers"));
const passport = require('passport');
class AuthenticationRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', authenticationControllers_1.default.create, passport.authenticate('local.signup', {
            successRedirect: '../../../',
            failureRedirect: '/'
        }));
    }
}
const authenticationRoutes = new AuthenticationRoutes();
exports.default = authenticationRoutes.router;
