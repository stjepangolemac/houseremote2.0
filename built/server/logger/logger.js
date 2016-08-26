"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var winston = require("winston");
var Logger = (function (_super) {
    __extends(Logger, _super);
    function Logger(settings) {
        _super.call(this);
        this.settings = settings;
        this.setLogger();
    }
    Logger.prototype.setLogger = function () {
        this.add(winston.transports.Console, {
            level: this.settings.loggerOptions.logConsoleLevel
        });
        if (this.settings.loggerOptions.logToFile) {
            this.add(winston.transports.File, {
                filename: this.settings.loggerOptions.logFileName,
                level: this.settings.loggerOptions.logFileLevel
            });
        }
    };
    return Logger;
}(winston.Logger));
exports.__esModule = true;
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFJbkM7SUFBb0MsMEJBQWM7SUFHaEQsZ0JBQVksUUFBeUI7UUFDbkMsaUJBQU8sQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sMEJBQVMsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUNqQztZQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1NBQ25ELENBQ0YsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFDOUI7Z0JBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVc7Z0JBQ2pELEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZO2FBQ2hELENBQ0YsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBekJBLEFBeUJDLENBekJtQyxPQUFPLENBQUMsTUFBTSxHQXlCakQ7QUF6QkQ7MkJBeUJDLENBQUEiLCJmaWxlIjoibG9nZ2VyL2xvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSBcIndpbnN0b25cIjtcblxuaW1wb3J0ICogYXMgVHlwZXMgZnJvbSBcIi4uL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlciBpbXBsZW1lbnRzIFR5cGVzLklMb2dnZXIge1xuICBwdWJsaWMgc2V0dGluZ3M6IFR5cGVzLklTZXR0aW5ncztcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogVHlwZXMuSVNldHRpbmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5zZXRMb2dnZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9nZ2VyKCkge1xuICAgIHRoaXMuYWRkKHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlLFxuICAgICAge1xuICAgICAgICBsZXZlbDogdGhpcy5zZXR0aW5ncy5sb2dnZXJPcHRpb25zLmxvZ0NvbnNvbGVMZXZlbCxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubG9nZ2VyT3B0aW9ucy5sb2dUb0ZpbGUpIHtcbiAgICAgIHRoaXMuYWRkKHdpbnN0b24udHJhbnNwb3J0cy5GaWxlLFxuICAgICAgICB7XG4gICAgICAgICAgZmlsZW5hbWU6IHRoaXMuc2V0dGluZ3MubG9nZ2VyT3B0aW9ucy5sb2dGaWxlTmFtZSxcbiAgICAgICAgICBsZXZlbDogdGhpcy5zZXR0aW5ncy5sb2dnZXJPcHRpb25zLmxvZ0ZpbGVMZXZlbCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
