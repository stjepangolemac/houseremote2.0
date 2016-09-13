import * as mongoose from "mongoose";

import { IService, ILogger, IRepository, IPeriodicTimer } from "../interfaces/interfaces";

export default class PeriodicTimerService implements IService {
  public logger: ILogger;
  public repository: IRepository;

  public create = (data: IPeriodicTimer) => this.repository.create(data);

  public read = () => this.repository.read();

  public update = (id: mongoose.Schema.Types.ObjectId, data: IPeriodicTimer) => this.repository.update(id, data);

  public delete = (id: mongoose.Schema.Types.ObjectId) => this.repository.delete(id);

  constructor(logger: ILogger, repository: IRepository) {
    this.logger = logger;
    this.repository = repository;
  }
}
