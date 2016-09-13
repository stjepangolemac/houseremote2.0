import * as express from "express";

import { IController, ILogger, IService, IResponse } from "../interfaces/interfaces.d.ts";

/**
 * Class that represents a PeriodicTimer controller and routes triger data.
 */
export default class PeriodicTimerController implements IController {

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
    this.router.get("/", this.getAllPeriodicTimers);
    this.router.post("/", this.createNewPeriodicTimer);
    this.router.put("/", this.updatePeriodicTimer);
    this.router.delete("/", this.deletePeriodicTimer);

    this.logger.info("PeriodicTimerController |", "routes loaded");
  }

  private getAllPeriodicTimers = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.read()
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private createNewPeriodicTimer = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.create(req.body)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private updatePeriodicTimer = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.update(req.params.id, req.body)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private deletePeriodicTimer = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.delete(req.params.id)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }
}
