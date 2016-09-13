import * as mongoose from "mongoose";
import { Promise } from "es6-promise";

import { IDatabase, ISettings, ILogger } from "../interfaces/interfaces";

export default class Database implements IDatabase {

    public settings: ISettings;
    public logger: ILogger;

    constructor(settings: ISettings, logger: ILogger) {
      this.settings = settings;
      this.logger = logger;

      this.connect()
      .then(() => this.logger.info("Database |", "successfully connected to database"))
      .catch((err) => {
          this.logger.error("Database |", err);
          throw err;
      });
      this.registerConnectionStates();
    }

    public connect = () => {
        return new Promise((resolve: (value?: any) => void, reject: (value?: any) => void) => {
            let connectionString =
            "mongodb://" + this.settings.databaseOptions.username +
            ":" + this.settings.databaseOptions.password +
            "@" + this.settings.databaseOptions.url;

            mongoose.connect(connectionString, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    public registerConnectionStates = () => {
        mongoose.connection.on("connected", () => {
            this.logger.info("Database |", "connection state changed to connected");
        });

        mongoose.connection.on("error", (err: mongoose.Error) => {
            this.logger.error("Database |", "connection state changed to error", err);
        });

        mongoose.connection.on("disconnected", () => {
            this.logger.warn("Database |", "connection state changed to disconnected");
        });
    }
}
