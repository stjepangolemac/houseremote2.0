import { ILoggerOptions } from "../interfaces/interfaces";

export default class LoggerOptions implements ILoggerOptions {
  public logConsoleLevel: string;
  public logToFile: boolean;
  public logFileLevel: string;
  public logFileName: string;

  constructor() {
    this.logConsoleLevel = process.env.LOG_CONSOLE_LEVEL;
    this.logToFile = process.env.LOG_TO_FILE;
    this.logFileLevel = process.env.LOG_FILE_LEVEL;
    this.logFileName = process.env.LOG_FILE_NAME;
  }
}
