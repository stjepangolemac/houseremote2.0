import * as dotenv from "dotenv";
dotenv.config();

import Server from "../server/server";
import Settings from "../settings/settings";
import ServerOptions from "../settings/serverOptions";
import LoggerOptions from "../settings/loggerOptions";
import DatabaseOptions from "../settings/databaseOptions";
import Logger from "../logger/logger";
import TriggerController from "../triggerController/triggerController";

let serverOptions = new ServerOptions();
let loggerOptions = new LoggerOptions();
let databaseOptions = new DatabaseOptions();
let settings = new Settings(serverOptions, loggerOptions, databaseOptions);

let logger = new Logger(settings);

let triggerController = new TriggerController(logger, "/trigger");

let server = new Server(logger, settings, [ triggerController ]);

server.start();
