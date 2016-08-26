import { ISettings, IServerOptions, ILoggerOptions, IDatabaseOptions } from "../interfaces/interfaces";

export default class Settings implements ISettings {
  public serverOptions: IServerOptions;
  public loggerOptions: ILoggerOptions;
  public databaseOptions: IDatabaseOptions;

  constructor(serverOptions: IServerOptions, loggerOptions: ILoggerOptions, databaseOptions: IDatabaseOptions) {
    this.serverOptions = serverOptions;
    this.loggerOptions = loggerOptions;
    this.databaseOptions = databaseOptions;
  }
}
