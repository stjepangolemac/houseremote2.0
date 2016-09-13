import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

import { IRepository, ILogger, IDatabase, IPeriodicTimer } from "../interfaces/interfaces";
import PeriodicTimer = require("../models/periodicTimer");
import Response from "../response/response";

export default class PeriodicTimerService implements IRepository {
  public logger: ILogger;
  public database: IDatabase;

  public create = (data: IPeriodicTimer) => {
    return new Promise((resolve: (value: any) => void, reject: (value: any) => void) => {
      this.logger.info("PeriodicTimerRepository |", "creating a periodicTimer");

      new PeriodicTimer(data).save()
      .then((saved: IPeriodicTimer) => {
        resolve(new Response(false, saved, "successfully created a new periodicTimer", true));
      })
      .catch((error: mongoose.Error) => {
        this.logger.error("PeriodicTimerRepository |", "failed to create a new periodicTimer");
        reject(new Response(true, error, "error while creating a new periodicTimer", false));
      });
    });
  }


  public read = () => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("PeriodicTimerRepository |", "listing all periodicTimers");

      PeriodicTimer.find()
      .then((found: IPeriodicTimer[]) => {
          resolve(new Response(false, found, "successfully found periodicTimers", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("PeriodicTimerRepository |", "failed to find periodicTimers", error);
          reject(new Response(true, error, "error while finding periodicTimers", false));
      });
    });
  }

  public update = (id: mongoose.Schema.Types.ObjectId, data: IPeriodicTimer) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("PeriodicTimerRepository |", "updating a periodicTimer");

      PeriodicTimer.update({ _id: id }, data)
      .then(() => resolve(new Response(false, {}, "successfully updated a periodicTimer", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("PeriodicTimerRepository |", "failed to update periodicTimers", error);
        reject(new Response(true, error, "error while updating a periodicTimer", false));
      });
    });
  }

  public delete = (id: mongoose.Schema.Types.ObjectId) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("PeriodicTimerRepository |", "deleting a periodicTimer");

      let query = PeriodicTimer.remove({ _id: id });
      query.exec()
      .then(() => resolve(new Response(false, {}, "successfully deleted a periodicTimer", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("PeriodicTimerRepository |", "error while deleting a periodicTimer", error);
        reject(new Response(true, error, "error while deleting a periodicTimer", false));
      });
    });
  }

  constructor(logger: ILogger, database: IDatabase) {
    this.logger = logger;
    this.database = database;
  }
}
