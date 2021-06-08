import express, { Application } from "express";
import path from "path";
import indexRoutes from "./routes/indexRoutes";
import productsRoutes from "./routes/productsRoutes";
import providersRoutes from "./routes/providersRoutes";
import authenticationRoutes from "./routes/authenticationRoutes";
import resupplyRoutes from "./routes/resupplyRoutes";


import inventarioRoutes from "./routes/inventarioRoutes";

const passport = require("passport");
import morgan from "morgan";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes";
import UsuarioRoutes from "./routes/UsuarioRoutes";
import ventasRoutes from "./routes/ventasRoutes";
import ventaProductosRoutes from "./routes/ventaProductoRoutes";
import contactoRoutes from "./routes/contactoRoutes";

class Server {
  public app: Application;
  constructor() {
    this.app = express();
    require("./lib/passport");
    this.config();
    this.routes();
  }
  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/productos", productsRoutes);

    this.app.use("/users", usersRoutes);
    this.app.use("/proveedores", providersRoutes);
    this.app.use("/signup", authenticationRoutes);
    this.app.use("/usuario", UsuarioRoutes);
    this.app.use("/entradas", resupplyRoutes);
    this.app.use("uploads", express.static(path.resolve("uploads")));
    this.app.use("/inventario", inventarioRoutes);
    this.app.use("/venta",ventasRoutes);
    this.app.use("/contacto",contactoRoutes);
    
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}
const server = new Server();
server.start();
