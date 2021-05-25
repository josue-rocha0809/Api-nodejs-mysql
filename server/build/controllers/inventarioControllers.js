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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InventarioControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventario = yield database_1.default.query('SELECT *FROM inventario');
            res.json(inventario);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into inventario (id_producto) select MAX(p.id) as id from productos p');
            res.json({ message: 'Product saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('update inventario inv INNER JOIN (select id,id_producto, cantidad_de_ingreso from entradas order by id desc limit 1) lp ON inv.id_producto=lp.id_producto set inv.cantidad_disp= inv.cantidad_disp + lp.cantidad_de_ingreso');
            res.json({ message: 'the product was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM inventario WHERE id_producto = ?', [id]);
            res.json({ message: 'the product was deleted' });
        });
    }
}
const inventarioControllers = new InventarioControllers();
exports.default = inventarioControllers;
