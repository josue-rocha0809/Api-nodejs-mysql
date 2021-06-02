"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const providersRoutes_1 = __importDefault(require("./routes/providersRoutes"));
const authenticationRoutes_1 = __importDefault(require("./routes/authenticationRoutes"));
const resupplyRoutes_1 = __importDefault(require("./routes/resupplyRoutes"));
const imagesRoutes_1 = __importDefault(require("./routes/imagesRoutes"));
const inventarioRoutes_1 = __importDefault(require("./routes/inventarioRoutes"));
const passport = require("passport");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
const ventasRoutes_1 = __importDefault(require("./routes/ventasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        require("./lib/passport");
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/productos", productsRoutes_1.default);
        this.app.use("/users", usersRoutes_1.default);
        this.app.use("/proveedores", providersRoutes_1.default);
        this.app.use("/signup", authenticationRoutes_1.default);
        this.app.use("/usuario", UsuarioRoutes_1.default);
        this.app.use("/entradas", resupplyRoutes_1.default);
        this.app.use("/images", imagesRoutes_1.default);
        this.app.use("uploads", express_1.default.static(path_1.default.resolve("uploads")));
        this.app.use("/inventario", inventarioRoutes_1.default);
        this.app.use("/venta", ventasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
