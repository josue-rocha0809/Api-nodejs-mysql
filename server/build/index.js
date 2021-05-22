"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const providersRoutes_1 = __importDefault(require("./routes/providersRoutes"));
const authenticationRoutes_1 = __importDefault(require("./routes/authenticationRoutes"));
const resupplyRoutes_1 = __importDefault(require("./routes/resupplyRoutes"));
const passport = require('passport');
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        require('./lib/passport');
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/productos', productsRoutes_1.default);
        this.app.use('/proveedores', providersRoutes_1.default);
        this.app.use('/signup', authenticationRoutes_1.default);
        this.app.use('/entradas', resupplyRoutes_1.default);
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
