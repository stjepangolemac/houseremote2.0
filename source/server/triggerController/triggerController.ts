import * as express from "express";

import { IController, ILogger, IService } from "../interfaces/interfaces.d.ts";

export default class TriggerController implements IController {

    public path: string;
    public router: express.Router;
    public logger: ILogger;
    public service: IService;

    constructor(logger: ILogger, path: string) {
        this.path = path;
        this.router = express.Router();
        this.logger = logger;

        this.loadRoutes();
    }

    private loadRoutes = () => {
        this.router.get("/", this.get);
        this.logger.info("TriggerController |", "Routes loaded");
    }

    private get = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        this.logger.info("HomeController |",
            "Got a", req.method, "request on",
            this.path, "with content", req.body);

        res.header("Content-Type", "application/json");
        res.send(JSON.stringify({ message: "Welcome to book exchange API"}));
    }
}
