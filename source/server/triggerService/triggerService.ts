import * as mongoose from "mongoose";

import { IService, ILogger, IRepository, ITrigger } from "../interfaces/interfaces";

export default class TriggerService implements IService {
  public logger: ILogger;
  public repository: IRepository;

  public create = (data: ITrigger) => this.repository.create(data);

  public read = () => this.repository.read();

  public update = (id: mongoose.Schema.Types.ObjectId, data: ITrigger) => this.repository.update(id, data);

  public delete = (id: mongoose.Schema.Types.ObjectId) => this.repository.delete(id);

  constructor(logger: ILogger, repository: IRepository) {
    this.logger = logger;
    this.repository = repository;
  }
}
