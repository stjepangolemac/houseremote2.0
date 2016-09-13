import { IResponse } from "../interfaces/interfaces";

export default class Response implements IResponse {
  public error: boolean;
  public data: Object;
  public message: string;
  public success: boolean;

  constructor(error: boolean, data: Object, message: string, success: boolean) {
    this.error = error;
    this.data = data;
    this.message = message;
    this.success = success;
  }
}
