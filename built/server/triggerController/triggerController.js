"use strict";
var express = require("express");
var TriggerController = (function () {
    function TriggerController(logger, path) {
        var _this = this;
        this.loadRoutes = function () {
            _this.router.get("/", _this.get);
            _this.logger.info("TriggerController |", "Routes loaded");
        };
        this.get = function (req, res, next) {
            _this.logger.info("HomeController |", "Got a", req.method, "request on", _this.path, "with content", req.body);
            res.header("Content-Type", "application/json");
            res.send(JSON.stringify({ message: "Welcome to book exchange API" }));
        };
        this.path = path;
        this.router = express.Router();
        this.logger = logger;
        this.loadRoutes();
    }
    return TriggerController;
}());
exports.__esModule = true;
exports["default"] = TriggerController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaWdnZXJDb250cm9sbGVyL3RyaWdnZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUluQztJQU9JLDJCQUFZLE1BQWUsRUFBRSxJQUFZO1FBUDdDLGlCQTRCQztRQWJXLGVBQVUsR0FBRztZQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQTtRQUVPLFFBQUcsR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtZQUNsRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFDL0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUNqQyxLQUFJLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFBO1FBbkJHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBZUwsd0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJEO3NDQTRCQyxDQUFBIiwiZmlsZSI6InRyaWdnZXJDb250cm9sbGVyL3RyaWdnZXJDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBJQ29udHJvbGxlciwgSUxvZ2dlciwgSVNlcnZpY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzLmQudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZ2dlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQ29udHJvbGxlciB7XG5cbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuICAgIHB1YmxpYyByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuICAgIHB1YmxpYyBsb2dnZXI6IElMb2dnZXI7XG4gICAgcHVibGljIHNlcnZpY2U6IElTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcblxuICAgICAgICB0aGlzLmxvYWRSb3V0ZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRSb3V0ZXMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyLmdldChcIi9cIiwgdGhpcy5nZXQpO1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVHJpZ2dlckNvbnRyb2xsZXIgfFwiLCBcIlJvdXRlcyBsb2FkZWRcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkhvbWVDb250cm9sbGVyIHxcIixcbiAgICAgICAgICAgIFwiR290IGFcIiwgcmVxLm1ldGhvZCwgXCJyZXF1ZXN0IG9uXCIsXG4gICAgICAgICAgICB0aGlzLnBhdGgsIFwid2l0aCBjb250ZW50XCIsIHJlcS5ib2R5KTtcblxuICAgICAgICByZXMuaGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIldlbGNvbWUgdG8gYm9vayBleGNoYW5nZSBBUElcIn0pKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
