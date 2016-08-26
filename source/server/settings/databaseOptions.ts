import { IDatabaseOptions } from "../interfaces/interfaces";

export default class DatabaseOptions implements IDatabaseOptions {
  public url: string;
  public username: string;
  public password: string;

  constructor() {
    this.url = process.env.DATABASE_URL;
    this.username = process.env.DATABASE_USERNAME;
    this.password = process.env.DATABASE_PASSWORD;
  }
}
