import * as mongoose from "mongoose";
mongoose.Promise = require("es6-promise").Promise;

import { ITrigger } from "../interfaces/interfaces";

interface ITriggerModel extends ITrigger, mongoose.Document { }

let triggerSchema = new mongoose.Schema({
  duration: {
    default: 300,
    max: 1000,
    min: 0,
    type: Number,
  },
  name: {
    maxlength: [32, "name must not be longer than 32 characters"],
    minlength: [4, "name must not be shorter than 4 characters"],
    required: [true, "name is required"],
    type: String,
  },
  relay: {
    ref: "Relay",
    type: mongoose.Schema.Types.ObjectId,
  },
});

export = mongoose.model<ITriggerModel>("Trigger", triggerSchema);
