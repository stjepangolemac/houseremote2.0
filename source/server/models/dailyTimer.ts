import * as mongoose from "mongoose";
mongoose.Promise = require("es6-promise").Promise;

import { IDailyTimer } from "../interfaces/interfaces";

interface IDailyTimerModel extends IDailyTimer, mongoose.Document { }

let DailyTimerSchema = new mongoose.Schema({
  duration: {
    max: [60 * 60 * 24 - 1, "duration cannot be greater than 86399"],
    min: [0, "duration cannot be less than 0"],
    type: Number,
  },
  enabled: {
    default: true,
    type: Boolean,
  },
  forceOn: {
    default: false,
    type: Boolean,
  },
  name: {
    maxlenght: [64, "name cannot be longer than 64 characters"],
    minlenght: [2, "name cannot be shorter than 2 characters"],
    type: String,
  },
  relay: {
    ref: "Relay",
    type: mongoose.Schema.Types.ObjectId,
  },
  startTime: {
    max: [60 * 60 * 24 - 1, "start time cannot be greater than 86399"],
    min: [0, "start time cannot be less than 0"],
    type: Number,
  },
});

export = mongoose.model<IDailyTimerModel>("DailyTimer", DailyTimerSchema);
