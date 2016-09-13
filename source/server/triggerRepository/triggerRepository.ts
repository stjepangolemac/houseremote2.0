import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

import { IRepository, ILogger, IDatabase, ITrigger} from "../interfaces/interfaces";
import Trigger = require("../models/trigger");
import Response from "../response/response";

export default class TriggerService implements IRepository {
  public logger: ILogger;
  public database: IDatabase;

  public create = (data: ITrigger) => {
    return new Promise((resolve: (value: any) => void, reject: (value: any) => void) => {
      this.logger.info("TriggerRepository |", "creating a trigger");

      new Trigger(data).save()
      .then((saved: ITrigger) => {
          resolve(new Response(false, saved, "successfully created a new trigger", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("TriggerRepository |", "failed to create a new trigger");
          reject(new Response(true, error, "error while creating a new trigger", false));
      });
    });
  }

  public read = () => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("TriggerRepository |", "listing all triggers");

      Trigger.find()
      .then((found: ITrigger[]) => {
          resolve(new Response(false, found, "successfully found triggers", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("TriggerRepository |", "failed to find triggers", error);
          reject(new Response(true, error, "error while finding triggers", false));
      });
    });
  }

  public update = (id: mongoose.Schema.Types.ObjectId, data: ITrigger) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("TriggerRepository |", "updating a trigger");

      Trigger.update({ _id: id }, data)
      .then(() => resolve(new Response(false, {}, "successfully updated a trigger", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("TriggerRepository |", "failed to update triggers", error);
        reject(new Response(true, error, "error while updating a trigger", false));
      });
    });
  }

  public delete = (id: mongoose.Schema.Types.ObjectId) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("TriggerRepository |", "deleting a trigger");

      let query = Trigger.remove({ _id: id });
      query.exec()
      .then(() => resolve(new Response(false, {}, "successfully deleted a trigger", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("TriggerRepository |", "error while deleting a trigger", error);
        reject(new Response(true, error, "error while deleting a trigger", false));
      });
    });
  }

  constructor(logger: ILogger, database: IDatabase) {
    this.logger = logger;
    this.database = database;
  }
}
