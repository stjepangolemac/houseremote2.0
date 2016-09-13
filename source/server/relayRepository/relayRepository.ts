import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

import { IRepository, ILogger, IDatabase, IRelay } from "../interfaces/interfaces";
import Relay = require("../models/relay");
import Response from "../response/response";

export default class RelayService implements IRepository {
  public logger: ILogger;
  public database: IDatabase;

  public create = (data: IRelay) => {
    return new Promise((resolve: (value: any) => void, reject: (value: any) => void) => {
      this.logger.info("RelayRepository |", "creating a relay");

      new Relay(data).save()
      .then((saved: IRelay) => {
        resolve(new Response(false, saved, "successfully created a new relay", true));
      })
      .catch((error: mongoose.Error) => {
        this.logger.error("RelayRepository |", "failed to create a new relay");
        reject(new Response(true, error, "error while creating a new relay", false));
      });
    });
  }


  public read = () => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("RelayRepository |", "listing all relays");

      Relay.find()
      .then((found: IRelay[]) => {
          resolve(new Response(false, found, "successfully found relays", true));
      })
      .catch((error: mongoose.Error) => {
          this.logger.error("RelayRepository |", "failed to find relays", error);
          reject(new Response(true, error, "error while finding relays", false));
      });
    });
  }

  public update = (id: mongoose.Schema.Types.ObjectId, data: IRelay) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("RelayRepository |", "updating a relay");

      Relay.update({ _id: id }, data)
      .then(() => resolve(new Response(false, {}, "successfully updated a relay", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("RelayRepository |", "failed to update relays", error);
        reject(new Response(true, error, "error while updating a relay", false));
      });
    });
  }

  public delete = (id: mongoose.Schema.Types.ObjectId) => {
    return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
      this.logger.info("RelayRepository |", "deleting a relay");

      let query = Relay.remove({ _id: id });
      query.exec()
      .then(() => resolve(new Response(false, {}, "successfully deleted a relay", true)))
      .catch((error: mongoose.Error) => {
        this.logger.error("RelayRepository |", "error while deleting a relay", error);
        reject(new Response(true, error, "error while deleting a relay", false));
      });
    });
  }

  constructor(logger: ILogger, database: IDatabase) {
    this.logger = logger;
    this.database = database;
  }
}
