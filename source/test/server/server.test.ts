import * as dotenv from "dotenv";
dotenv.config();

import { expect } from "chai";
import Server from "../../server/server/server";
import Settings from "../../server/settings/settings";
import ServerOptions from "../../server/settings/serverOptions";
import LoggerOptions from "../../server/settings/loggerOptions";
import DatabaseOptions from "../../server/settings/databaseOptions";
import Logger from "../../server/logger/logger";

describe("Server class", () => {

  it("should say hello", () => {
    let serverOptions = new ServerOptions();
    let loggerOptions = new LoggerOptions();
    let databaseOptions = new DatabaseOptions();
    let settings = new Settings(serverOptions, loggerOptions, databaseOptions);
    let logger = new Logger(settings);
    let server = new Server(logger, settings, []);
    server.start();

    expect(server);
  });

});
