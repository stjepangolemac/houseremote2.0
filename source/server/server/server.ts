/// <reference path="../../../typings/index.d.ts" />

import * as fs from "fs";
import * as https from "https";
import * as express from "express";
import * as bodyParser from "body-parser";

import { ILogger, ISettings, IController } from "../interfaces/interfaces";

export default class Server {

  public logger: ILogger;
  public settings: ISettings;
  public controllers: IController[];
  public app: express.Express;

  private options = {
    cert: fs.readFileSync("private/houseremote.ddns.net.cert.pem"),
    key: fs.readFileSync("private/houseremote.ddns.net.key.pem"),
  };

  public start = () => {
    https.createServer(this.options, this.app).listen(this.settings.serverOptions.port);
    this.logger.info("Server |", "started listening on", this.settings.serverOptions.port);

    this.loadControllers();
  }

  public loadControllers = () => {
        this.controllers.forEach(controller => {
            this.app.use(controller.path, controller.router);
            this.logger.info("Server |", "controller loaded on route", controller.path);
        });
    }

  constructor(logger: ILogger, settings: ISettings, controllers: IController[]) {
    this.logger = logger;
    this.settings = settings;
    this.controllers = controllers;

    this.app = express();
    this.app.use(bodyParser.json());
  }
}
