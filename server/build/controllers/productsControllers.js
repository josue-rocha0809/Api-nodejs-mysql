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
class ProductsControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.default.query('SELECT *  FROM productos');
            res.json(products);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            console.log('id=' + id);
            const products = yield database_1.default.query('SELECT * FROM productos  WHERE id = ?', [id]);
            console.log(products);
            if (products.length > 0) {
                return res.json(products[0]);
            }
            res.status(404).json({ text: 'the product doesnt exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json({ message: 'Product saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE productos set ? WHERE id= ?', [req.body, id]);
            res.json({ message: 'the product was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE id = ?', [id]);
            res.json({ message: 'the game was deleted' });
        });
    }
}
const productController = new ProductsControllers();
exports.default = productController;
