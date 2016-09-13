import * as winston from "winston";
import * as express from "express";
import * as  mongoose from "mongoose";
import { Promise } from "es6-promise";

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
    create: (data: any) => Promise<any>;
    read: () => Promise<any>;
    update: (id: mongoose.Schema.Types.ObjectId, data: any) => Promise<any>;
    delete: (id: mongoose.Schema.Types.ObjectId) => Promise<any>;
}

export interface IRepository {
    logger: ILogger;
    database: IDatabase;
    create: (data: any) => Promise<any>;
    read: () => Promise<any>;
    update: (id: mongoose.Schema.Types.ObjectId, data: any) => Promise<any>;
    delete: (id: mongoose.Schema.Types.ObjectId) => Promise<any>;
}

export interface IDatabase {
    settings: ISettings;
    logger: ILogger;
}

export interface IResponse {
  error: boolean;
  data: Object;
  message: string;
  success: boolean;
}
/**
 * Mongoose model interfaces
 */

export interface ITrigger {
  name: string;
  relay: string;
  delay: number;
}

export interface IToggler {
  name: string;
  relay: string;
}

export interface ITimer {
  name: string;
  relay: string;
  enabled: boolean;
  forceOn: boolean;
}

export interface IDailyTimer extends ITimer {
  startTime: number;
  duration: number;
}

export interface IPeriodicTimer extends ITimer {
  offTime: number;
  onTime: number;
  lastOn: number;
  lastOff: number;
}

/**
 * Arduino devices
 */
export interface IDevice {
  name: string;
  description: string;
  pin: number;
}

export interface IRelay extends IDevice {
  state: boolean;
}

export interface ISensor extends IDevice {
  value: number;
}

export interface ITransreceiver extends IDevice {

}
