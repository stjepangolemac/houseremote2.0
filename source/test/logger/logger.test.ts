import * as dotenv from "dotenv";
dotenv.config();

import { expect } from "chai";

import Settings from "../../server/settings/settings";
import ServerOptions from "../../server/settings/serverOptions";
import LoggerOptions from "../../server/settings/loggerOptions";
import DatabaseOptions from "../../server/settings/databaseOptions";
import Logger from "../../server/logger/logger";

describe("Logger class", () => {

  it("should log to file", () => {
    let serverOptions = new ServerOptions();
    let loggerOptions = new LoggerOptions();
    let databaseOptions = new DatabaseOptions();
    let settings = new Settings(serverOptions, loggerOptions, databaseOptions);
    let logger = new Logger(settings);

    expect(logger.settings.loggerOptions.logToFile).to.be.ok;
  });

  it("should not log to file", () => {
    let serverOptions = new ServerOptions();
    let loggerOptions = new LoggerOptions();

    loggerOptions.logToFile = false;

    let databaseOptions = new DatabaseOptions();
    let settings = new Settings(serverOptions, loggerOptions, databaseOptions);
    let logger = new Logger(settings);

    expect(logger.settings.loggerOptions.logToFile).to.be.not.ok;
  });

});
