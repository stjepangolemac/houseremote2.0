import * as mongoose from "mongoose";
mongoose.Promise = require("es6-promise").Promise;

import { IRelay } from "../interfaces/interfaces";

interface IRelayModel extends IRelay, mongoose.Document { }

let relaySchema = new mongoose.Schema({
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
  state: {
    default: true,
    type: Boolean,
  },
});

export = mongoose.model<IRelayModel>("relay", relaySchema);
