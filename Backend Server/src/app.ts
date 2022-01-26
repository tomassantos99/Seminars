import express from "express";

import * as bodyParser from "body-parser";
import { userRoutes } from "./Routes/UserRoutes";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    this.app.set("port", 8080);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use("/users", userRoutes);
    this.app.disable("etag");
  }

  start() {
    this.app.listen((process.env.PORT || 8080), () => {
      console.log("Server running in port " + this.app.get("port"));
    });
  }
}