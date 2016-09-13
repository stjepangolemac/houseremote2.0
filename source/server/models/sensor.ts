import * as mongoose from "mongoose";
mongoose.Promise = require("es6-promise").Promise;

import { ISensor } from "../interfaces/interfaces";

interface ISensorModel extends ISensor, mongoose.Document { }

let sensorSchema = new mongoose.Schema({
  description: {
    maxlength: [128, "description must not be longer than 32 characters"],
    minlength: [16, "description must not be shorter than 4 characters"],
    required: [true, "description is required"],
    type: String,
  },
  name: {
    maxlength: [32, "name must not be longer than 32 characters"],
    minlength: [4, "name must not be shorter than 4 characters"],
    required: [true, "name is required"],
    type: String,
  },
  pin: {
    required: [true, "pin is required"],
    type: Number,
  },
  value: {
    default: 0,
    type: Number,
  },
});

export = mongoose.model<ISensorModel>("sensor", sensorSchema);
