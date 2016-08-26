import * as winston from "winston";

import * as Types from "../interfaces/interfaces";

export default class Logger extends winston.Logger implements Types.ILogger {
  public settings: Types.ISettings;

  constructor(settings: Types.ISettings) {
    super();
    this.settings = settings;
    this.setLogger();
  }

  private setLogger() {
    this.add(winston.transports.Console,
      {
        level: this.settings.loggerOptions.logConsoleLevel,
      }
    );

    if (this.settings.loggerOptions.logToFile) {
      this.add(winston.transports.File,
        {
          filename: this.settings.loggerOptions.logFileName,
          level: this.settings.loggerOptions.logFileLevel,
        }
      );
    }
  }
}
