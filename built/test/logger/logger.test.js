"use strict";
var dotenv = require("dotenv");
dotenv.config();
var chai_1 = require("chai");
var settings_1 = require("../../server/settings/settings");
var serverOptions_1 = require("../../server/settings/serverOptions");
var loggerOptions_1 = require("../../server/settings/loggerOptions");
var databaseOptions_1 = require("../../server/settings/databaseOptions");
var logger_1 = require("../../server/logger/logger");
describe("Logger class", function () {
    it("should log to file", function () {
        var serverOptions = new serverOptions_1["default"]();
        var loggerOptions = new loggerOptions_1["default"]();
        var databaseOptions = new databaseOptions_1["default"]();
        var settings = new settings_1["default"](serverOptions, loggerOptions, databaseOptions);
        var logger = new logger_1["default"](settings);
        chai_1.expect(logger.settings.loggerOptions.logToFile).to.be.ok;
    });
    it("should not log to file", function () {
        var serverOptions = new serverOptions_1["default"]();
        var loggerOptions = new loggerOptions_1["default"]();
        loggerOptions.logToFile = false;
        var databaseOptions = new databaseOptions_1["default"]();
        var settings = new settings_1["default"](serverOptions, loggerOptions, databaseOptions);
        var logger = new logger_1["default"](settings);
        chai_1.expect(logger.settings.loggerOptions.logToFile).to.be.not.ok;
    });
});
