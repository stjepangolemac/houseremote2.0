import * as mongoose from "mongoose";

import { IService, ILogger, IRepository, IRelay } from "../interfaces/interfaces";

export default class RelayService implements IService {
  public logger: ILogger;
  public repository: IRepository;

  public create = (data: IRelay) => this.repository.create(data);

  public read = () => this.repository.read();

  public update = (id: mongoose.Schema.Types.ObjectId, data: IRelay) => this.repository.update(id, data);

  public delete = (id: mongoose.Schema.Types.ObjectId) => this.repository.delete(id);

  constructor(logger: ILogger, repository: IRepository) {
    this.logger = logger;
    this.repository = repository;
  }
}
