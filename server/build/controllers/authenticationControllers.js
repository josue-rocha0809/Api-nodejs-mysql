"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
class AuthenticationControllers {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'User saved' });
            passport.use('local.signup', new LocalStrategy({
                usernameField: 'nombre',
                passwordField: 'contra',
                passReqToCallback: true
            }, (req, nombre, contra, done) => __awaiter(this, void 0, void 0, function* () {
                console.log(req.body);
            })));
        });
    }
}
const authenticationController = new AuthenticationControllers();
exports.default = authenticationController;
