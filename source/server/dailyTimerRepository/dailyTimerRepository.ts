import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

import { IRepository, ILogger, IDatabase, IDailyTimer } from "../interfaces/interfaces";
import DailyTimer = require("../models/dailyTimer");
import Response from "../response/response";

export default class DailyTimerService implements IRepository {
  public logger: ILogger;
  public database: IDatabase;

  public create = (data: IDailyTimer) => {
    return new Promise((resolve: (value: any) => void, reject: (value: any) => void) => {
      this.logger.info("DailyTimerRepository |", "creating a dailyTimer");

      new DailyTimer(data).save()
      .then((saved: IDailyTimer) => {
        resolve(new Response(false, saved, "successfully created a new dailyTimer", true));
      })
      .catch((error: mongoose.Error) => {
        this.logger.error("DailyTimerRepository |", "failed to create a new dailyTimer");
        reject(new Response(true, error, "error while creating a new dailyTimer", false));
      });
    });
  }


  public read = () => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("DailyTimerRepository |", "listing all dailyTimers");

      DailyTimer.find()
      .then((found: IDailyTimer[]) => {
          resolve(new Response(false, found, "successfully found dailyTimers", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("DailyTimerRepository |", "failed to find dailyTimers", error);
          reject(new Response(true, error, "error while finding dailyTimers", false));
      });
    });
  }

  public update = (id: mongoose.Schema.Types.ObjectId, data: IDailyTimer) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("DailyTimerRepository |", "updating a dailyTimer");

      DailyTimer.update({ _id: id }, data)
      .then(() => resolve(new Response(false, {}, "successfully updated a dailyTimer", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("DailyTimerRepository |", "failed to update dailyTimers", error);
        reject(new Response(true, error, "error while updating a dailyTimer", false));
      });
    });
  }

  public delete = (id: mongoose.Schema.Types.ObjectId) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("DailyTimerRepository |", "deleting a dailyTimer");

      let query = DailyTimer.remove({ _id: id });
      query.exec()
      .then(() => resolve(new Response(false, {}, "successfully deleted a dailyTimer", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("DailyTimerRepository |", "error while deleting a dailyTimer", error);
        reject(new Response(true, error, "error while deleting a dailyTimer", false));
      });
    });
  }

  constructor(logger: ILogger, database: IDatabase) {
    this.logger = logger;
    this.database = database;
  }
}
