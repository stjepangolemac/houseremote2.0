import * as express from "express";

import { IController, ILogger, IService, IResponse } from "../interfaces/interfaces.d.ts";

/**
 * Class that represents a sensor controller and routes triger data.
 */
export default class SensorController implements IController {

  public path: string;
  public router: express.Router;
  public logger: ILogger;
  public service: IService;

  constructor(logger: ILogger, path: string, service: IService) {
    this.path = path;
    this.router = express.Router();
    this.logger = logger;
    this.service = service;

    this.loadRoutes();
  }

  private loadRoutes = () => {
    this.router.get("/", this.getAllSensors);
    this.router.post("/", this.createNewSensor);
    this.router.put("/", this.updateSensor);
    this.router.delete("/", this.deleteSensor);

    this.logger.info("SensorController |", "routes loaded");
  }

  private getAllSensors = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.read()
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private createNewSensor = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.create(req.body)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private updateSensor = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.update(req.params.id, req.body)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private deleteSensor = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.delete(req.params.id)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }
}
