"use strict";
var fs = require("fs");
var https = require("https");
var express = require("express");
var bodyParser = require("body-parser");
var Server = (function () {
    function Server(logger, settings, controllers) {
        var _this = this;
        this.options = {
            cert: fs.readFileSync("private/houseremote.ddns.net.cert.pem"),
            key: fs.readFileSync("private/houseremote.ddns.net.key.pem")
        };
        this.start = function () {
            https.createServer(_this.options, _this.app).listen(_this.settings.serverOptions.port);
            _this.logger.info("Server |", "started listening on", _this.settings.serverOptions.port);
            _this.loadControllers();
        };
        this.loadControllers = function () {
            _this.controllers.forEach(function (controller) {
                _this.app.use(controller.path, controller.router);
                _this.logger.info("Server |", "controller loaded on route", controller.path);
            });
        };
        this.logger = logger;
        this.settings = settings;
        this.controllers = controllers;
        this.app = express();
        this.app.use(bodyParser.json());
    }
    return Server;
}());
exports.__esModule = true;
exports["default"] = Server;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQVksRUFBRSxXQUFNLElBQUksQ0FBQyxDQUFBO0FBQ3pCLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBSTFDO0lBMEJFLGdCQUFZLE1BQWUsRUFBRSxRQUFtQixFQUFFLFdBQTBCO1FBMUI5RSxpQkFrQ0M7UUEzQlMsWUFBTyxHQUFHO1lBQ2hCLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLHVDQUF1QyxDQUFDO1lBQzlELEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLHNDQUFzQyxDQUFDO1NBQzdELENBQUM7UUFFSyxVQUFLLEdBQUc7WUFDYixLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdkYsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQTtRQUVNLG9CQUFlLEdBQUc7WUFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO2dCQUMvQixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDRCQUE0QixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtRQUdELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENEOzJCQWtDQyxDQUFBIiwiZmlsZSI6InNlcnZlci9zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cblxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tIFwiaHR0cHNcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5cbmltcG9ydCB7IElMb2dnZXIsIElTZXR0aW5ncywgSUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XG5cbiAgcHVibGljIGxvZ2dlcjogSUxvZ2dlcjtcbiAgcHVibGljIHNldHRpbmdzOiBJU2V0dGluZ3M7XG4gIHB1YmxpYyBjb250cm9sbGVyczogSUNvbnRyb2xsZXJbXTtcbiAgcHVibGljIGFwcDogZXhwcmVzcy5FeHByZXNzO1xuXG4gIHByaXZhdGUgb3B0aW9ucyA9IHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoXCJwcml2YXRlL2hvdXNlcmVtb3RlLmRkbnMubmV0LmNlcnQucGVtXCIpLFxuICAgIGtleTogZnMucmVhZEZpbGVTeW5jKFwicHJpdmF0ZS9ob3VzZXJlbW90ZS5kZG5zLm5ldC5rZXkucGVtXCIpLFxuICB9O1xuXG4gIHB1YmxpYyBzdGFydCA9ICgpID0+IHtcbiAgICBodHRwcy5jcmVhdGVTZXJ2ZXIodGhpcy5vcHRpb25zLCB0aGlzLmFwcCkubGlzdGVuKHRoaXMuc2V0dGluZ3Muc2VydmVyT3B0aW9ucy5wb3J0KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU2VydmVyIHxcIiwgXCJzdGFydGVkIGxpc3RlbmluZyBvblwiLCB0aGlzLnNldHRpbmdzLnNlcnZlck9wdGlvbnMucG9ydCk7XG5cbiAgICB0aGlzLmxvYWRDb250cm9sbGVycygpO1xuICB9XG5cbiAgcHVibGljIGxvYWRDb250cm9sbGVycyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKGNvbnRyb2xsZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHAudXNlKGNvbnRyb2xsZXIucGF0aCwgY29udHJvbGxlci5yb3V0ZXIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlNlcnZlciB8XCIsIFwiY29udHJvbGxlciBsb2FkZWQgb24gcm91dGVcIiwgY29udHJvbGxlci5wYXRoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgc2V0dGluZ3M6IElTZXR0aW5ncywgY29udHJvbGxlcnM6IElDb250cm9sbGVyW10pIHtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuXG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
