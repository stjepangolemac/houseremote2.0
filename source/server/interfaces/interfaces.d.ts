import * as winston from "winston";
import * as express from "express";

export interface IServer {

}

export interface ILogger extends winston.LoggerInstance {
  settings: ISettings;
}

export interface ISettings {
  serverOptions: IServerOptions;
  loggerOptions: ILoggerOptions;
  databaseOptions: IDatabaseOptions;
}

export interface IServerOptions {
  port: number;
}

export interface ILoggerOptions {
  logConsoleLevel: string;
  logToFile: boolean;
  logFileLevel: string;
  logFileName: string;
}

export interface IDatabaseOptions {
  url: string;
  username: string;
  password: string;
}

export interface IController {
    path: string;
    router: express.Router;
    logger: ILogger;
    service: IService;
}

export interface IService {
    logger: ILogger;
    repository: IRepository;
}

export interface IRepository {
    logger: ILogger;
    database: IDatabase;
}

export interface IDatabase {
    settings: ISettings;
    logger: ILogger;
}
