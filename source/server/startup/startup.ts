import * as dotenv from "dotenv";
dotenv.config();

import Server from "../server/server";
import Settings from "../settings/settings";
import ServerOptions from "../settings/serverOptions";
import LoggerOptions from "../settings/loggerOptions";
import DatabaseOptions from "../settings/databaseOptions";
import Logger from "../logger/logger";
import TriggerController from "../triggerController/triggerController";
import TriggerService from "../triggerService/triggerService";
import TriggerRepository from "../triggerRepository/triggerRepository";
import RelayController from "../relayController/relayController";
import RelayService from "../relayService/relayService";
import RelayRepository from "../relayRepository/relayRepository";
import SensorController from "../sensorController/sensorController";
import SensorService from "../sensorService/sensorService";
import SensorRepository from "../sensorRepository/sensorRepository";
import DailyTimerController from "../dailyTimerController/dailyTimerController";
import DailyTimerService from "../dailyTimerService/dailyTimerService";
import DailyTimerRepository from "../dailyTimerRepository/dailyTimerRepository";
import PeriodicTimerController from "../periodicTimerController/periodicTimerController";
import PeriodicTimerService from "../periodicTimerService/periodicTimerService";
import PeriodicTimerRepository from "../periodicTimerRepository/periodicTimerRepository";
import Database from "../database/database";

let serverOptions = new ServerOptions();
let loggerOptions = new LoggerOptions();
let databaseOptions = new DatabaseOptions();
let settings = new Settings(serverOptions, loggerOptions, databaseOptions);

let logger = new Logger(settings);

let database = new Database(settings, logger);

let triggerRepository = new TriggerRepository(logger, database);
let triggerService = new TriggerService(logger, triggerRepository);
let triggerController = new TriggerController(logger, "/trigger", triggerService);

let relayRepository = new RelayRepository(logger, database);
let relayService = new RelayService(logger, relayRepository);
let relayController = new RelayController(logger, "/relay", relayService);

let sensorRepository = new SensorRepository(logger, database);
let sensorService = new SensorService(logger, sensorRepository);
let sensorController = new SensorController(logger, "/sensor", sensorService);

let dailyTimerRepository = new DailyTimerRepository(logger, database);
let dailyTimerService = new DailyTimerService(logger, dailyTimerRepository);
let dailyTimerController = new DailyTimerController(logger, "/daily", dailyTimerService);

let periodicTimerRepository = new PeriodicTimerRepository(logger, database);
let periodicTimerService = new PeriodicTimerService(logger, periodicTimerRepository);
let periodicTimerController = new PeriodicTimerController(logger, "/periodic", periodicTimerService);

let server = new Server(
  logger,
  settings,
  database,
  [ triggerController,
    relayController,
    sensorController,
    dailyTimerController,
    periodicTimerController ]);

server.start();
