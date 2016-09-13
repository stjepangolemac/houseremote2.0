import * as express from "express";

import { IController, ILogger, IService, IResponse } from "../interfaces/interfaces.d.ts";

/**
 * Class that represents a Relay controller and routes triger data.
 */
export default class RelayController implements IController {

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
    this.router.get("/", this.getAllRelays);
    this.router.post("/", this.createNewRelay);
    this.router.put("/", this.updateRelay);
    this.router.delete("/", this.deleteRelay);

    this.logger.info("RelayController |", "routes loaded");
  }

  private getAllRelays = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.read()
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private createNewRelay = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.create(req.body)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private updateRelay = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.update(req.params.id, req.body)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }

  private deleteRelay = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    this.service.delete(req.params.id)
    .then((response: IResponse) => res.status(200).send(response))
    .catch((response: IResponse) => res.status(400).send(response));
  }
}
