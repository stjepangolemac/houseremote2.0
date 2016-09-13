import * as mongoose from "mongoose";
mongoose.Promise = require("es6-promise").Promise;

import { IPeriodicTimer } from "../interfaces/interfaces";

interface IPeriodicTimerModel extends IPeriodicTimer, mongoose.Document { }

let PeriodicTimerSchema = new mongoose.Schema({
  enabled: {
    default: true,
    type: Boolean,
  },
  forceOn: {
    default: false,
    type: Boolean,
  },
  lastOff: {
    max: [60 * 60 * 24 - 1, "lastOff cannot be greater than 86399"],
    min: [0, "lastOff cannot be less than 0"],
    type: Number,
  },
  lastOn: {
    max: [60 * 60 * 24 - 1, "lastOn cannot be greater than 86399"],
    min: [0, "lastOn cannot be less than 0"],
    type: Number,
  },
  name: {
    maxlenght: [64, "name cannot be longer than 64 characters"],
    minlenght: [2, "name cannot be shorter than 2 characters"],
    type: String,
  },
  offTime: {
    max: [60 * 60 * 24 - 1, "offTime cannot be greater than 86399"],
    min: [0, "offTime cannot be less than 0"],
    type: Number,
  },
  onTime: {
    max: [60 * 60 * 24 - 1, "onTime cannot be greater than 86399"],
    min: [0, "onTime cannot be less than 0"],
    type: Number,
  },
  relay: {
    ref: "Relay",
    type: mongoose.Schema.Types.ObjectId,
  },
});

export = mongoose.model<IPeriodicTimerModel>("PeriodicTimer", PeriodicTimerSchema);
