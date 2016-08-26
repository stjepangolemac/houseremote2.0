import { IServerOptions } from "../interfaces/interfaces";

export default class ServerOptions implements IServerOptions {
  public port: number;

  constructor() {
    this.port = process.env.PORT;
  }
}
