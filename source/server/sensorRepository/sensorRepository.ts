import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

import { IRepository, ILogger, IDatabase, ISensor} from "../interfaces/interfaces";
import Sensor = require("../models/sensor");
import Response from "../response/response";

export default class SensorService implements IRepository {
  public logger: ILogger;
  public database: IDatabase;

  public create = (data: ISensor) => {
    return new Promise((resolve: (value: any) => void, reject: (value: any) => void) => {
      this.logger.info("SensorRepository |", "creating a Sensor");

      new Sensor(data).save()
      .then((saved: ISensor) => {
          resolve(new Response(false, saved, "successfully created a new Sensor", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("SensorRepository |", "failed to create a new Sensor");
          reject(new Response(true, error, "error while creating a new Sensor", false));
      });
    });
  }

  public read = () => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("SensorRepository |", "listing all Sensors");

      Sensor.find()
      .then((found: ISensor[]) => {
          resolve(new Response(false, found, "successfully found Sensors", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("SensorRepository |", "failed to find Sensors", error);
          reject(new Response(true, error, "error while finding Sensors", false));
      });
    });
  }

  public update = (id: mongoose.Schema.Types.ObjectId, data: ISensor) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("SensorRepository |", "updating a Sensor");

      Sensor.update({ _id: id }, data)
      .then(() => resolve(new Response(false, {}, "successfully updated a Sensor", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("SensorRepository |", "failed to update Sensors", error);
        reject(new Response(true, error, "error while updating a Sensor", false));
      });
    });
  }

  public delete = (id: mongoose.Schema.Types.ObjectId) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("SensorRepository |", "deleting a Sensor");

      let query = Sensor.remove({ _id: id });
      query.exec()
      .then(() => resolve(new Response(false, {}, "successfully deleted a Sensor", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("SensorRepository |", "error while deleting a Sensor", error);
        reject(new Response(true, error, "error while deleting a Sensor", false));
      });
    });
  }

  constructor(logger: ILogger, database: IDatabase) {
    this.logger = logger;
    this.database = database;
  }
}
