"use strict";
var es6_promise_1 = require("es6-promise");
var Sensor = require("../models/sensor");
var response_1 = require("../response/response");
var SensorService = (function () {
    function SensorService(logger, database) {
        var _this = this;
        this.create = function (data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("SensorRepository |", "creating a Sensor");
                new Sensor(data).save()
                    .then(function (saved) {
                    resolve(new response_1["default"](false, saved, "successfully created a new Sensor", true));
                })
                    .catch(function (error) {
                    _this.logger.error("SensorRepository |", "failed to create a new Sensor");
                    reject(new response_1["default"](true, error, "error while creating a new Sensor", false));
                });
            });
        };
        this.read = function () {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("SensorRepository |", "listing all Sensors");
                Sensor.find()
                    .then(function (found) {
                    resolve(new response_1["default"](false, found, "successfully found Sensors", true));
                })
                    .catch(function (error) {
                    _this.logger.error("SensorRepository |", "failed to find Sensors", error);
                    reject(new response_1["default"](true, error, "error while finding Sensors", false));
                });
            });
        };
        this.update = function (id, data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("SensorRepository |", "updating a Sensor");
                Sensor.update({ _id: id }, data)
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully updated a Sensor", true)); })
                    .catch(function (error) {
                    _this.logger.error("SensorRepository |", "failed to update Sensors", error);
                    reject(new response_1["default"](true, error, "error while updating a Sensor", false));
                });
            });
        };
        this.delete = function (id) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("SensorRepository |", "deleting a Sensor");
                var query = Sensor.remove({ _id: id });
                query.exec()
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully deleted a Sensor", true)); })
                    .catch(function (error) {
                    _this.logger.error("SensorRepository |", "error while deleting a Sensor", error);
                    reject(new response_1["default"](true, error, "error while deleting a Sensor", false));
                });
            });
        };
        this.logger = logger;
        this.database = database;
    }
    return SensorService;
}());
exports.__esModule = true;
exports["default"] = SensorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvclJlcG9zaXRvcnkvc2Vuc29yUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBR3RDLElBQU8sTUFBTSxXQUFXLGtCQUFrQixDQUFDLENBQUM7QUFDNUMseUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUE2REUsdUJBQVksTUFBZSxFQUFFLFFBQW1CO1FBN0RsRCxpQkFpRUM7UUE3RFEsV0FBTSxHQUFHLFVBQUMsSUFBYTtZQUM1QixNQUFNLENBQUMsSUFBSSxxQkFBTyxDQUFDLFVBQUMsT0FBNkIsRUFBRSxNQUE0QjtnQkFDN0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFFNUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO3FCQUN0QixJQUFJLENBQUMsVUFBQyxLQUFjO29CQUNqQixPQUFPLENBQUMsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEtBQXFCO29CQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO29CQUN6RSxNQUFNLENBQUMsSUFBSSxxQkFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEYsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUVNLFNBQUksR0FBRztZQUNaLE1BQU0sQ0FBQyxJQUFJLHFCQUFPLENBQUMsVUFBQyxPQUE4QixFQUFFLE1BQTZCO2dCQUMvRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0Is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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7IFByb21pc2UgfSBmcm9tIFwiZXM2LXByb21pc2VcIjtcblxuaW1wb3J0IHsgSVJlcG9zaXRvcnksIElMb2dnZXIsIElEYXRhYmFzZSwgSVNlbnNvcn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IFNlbnNvciA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvc2Vuc29yXCIpO1xuaW1wb3J0IFJlc3BvbnNlIGZyb20gXCIuLi9yZXNwb25zZS9yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5zb3JTZXJ2aWNlIGltcGxlbWVudHMgSVJlcG9zaXRvcnkge1xuICBwdWJsaWMgbG9nZ2VyOiBJTG9nZ2VyO1xuICBwdWJsaWMgZGF0YWJhc2U6IElEYXRhYmFzZTtcblxuICBwdWJsaWMgY3JlYXRlID0gKGRhdGE6IElTZW5zb3IpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogYW55KSA9PiB2b2lkLCByZWplY3Q6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU2Vuc29yUmVwb3NpdG9yeSB8XCIsIFwiY3JlYXRpbmcgYSBTZW5zb3JcIik7XG5cbiAgICAgIG5ldyBTZW5zb3IoZGF0YSkuc2F2ZSgpXG4gICAgICAudGhlbigoc2F2ZWQ6IElTZW5zb3IpID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShmYWxzZSwgc2F2ZWQsIFwic3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBuZXcgU2Vuc29yXCIsIHRydWUpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiU2Vuc29yUmVwb3NpdG9yeSB8XCIsIFwiZmFpbGVkIHRvIGNyZWF0ZSBhIG5ldyBTZW5zb3JcIik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSBjcmVhdGluZyBhIG5ldyBTZW5zb3JcIiwgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlYWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU2Vuc29yUmVwb3NpdG9yeSB8XCIsIFwibGlzdGluZyBhbGwgU2Vuc29yc1wiKTtcblxuICAgICAgU2Vuc29yLmZpbmQoKVxuICAgICAgLnRoZW4oKGZvdW5kOiBJU2Vuc29yW10pID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShmYWxzZSwgZm91bmQsIFwic3VjY2Vzc2Z1bGx5IGZvdW5kIFNlbnNvcnNcIiwgdHJ1ZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJTZW5zb3JSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gZmluZCBTZW5zb3JzXCIsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IFJlc3BvbnNlKHRydWUsIGVycm9yLCBcImVycm9yIHdoaWxlIGZpbmRpbmcgU2Vuc29yc1wiLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlID0gKGlkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIGRhdGE6IElTZW5zb3IpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTZW5zb3JSZXBvc2l0b3J5IHxcIiwgXCJ1cGRhdGluZyBhIFNlbnNvclwiKTtcblxuICAgICAgU2Vuc29yLnVwZGF0ZSh7IF9pZDogaWQgfSwgZGF0YSlcbiAgICAgIC50aGVuKCgpID0+IHJlc29sdmUobmV3IFJlc3BvbnNlKGZhbHNlLCB7fSwgXCJzdWNjZXNzZnVsbHkgdXBkYXRlZCBhIFNlbnNvclwiLCB0cnVlKSkpXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlNlbnNvclJlcG9zaXRvcnkgfFwiLCBcImZhaWxlZCB0byB1cGRhdGUgU2Vuc29yc1wiLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgdXBkYXRpbmcgYSBTZW5zb3JcIiwgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZSA9IChpZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU2Vuc29yUmVwb3NpdG9yeSB8XCIsIFwiZGVsZXRpbmcgYSBTZW5zb3JcIik7XG5cbiAgICAgIGxldCBxdWVyeSA9IFNlbnNvci5yZW1vdmUoeyBfaWQ6IGlkIH0pO1xuICAgICAgcXVlcnkuZXhlYygpXG4gICAgICAudGhlbigoKSA9PiByZXNvbHZlKG5ldyBSZXNwb25zZShmYWxzZSwge30sIFwic3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgYSBTZW5zb3JcIiwgdHJ1ZSkpKVxuICAgICAgLmNhdGNoKChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJTZW5zb3JSZXBvc2l0b3J5IHxcIiwgXCJlcnJvciB3aGlsZSBkZWxldGluZyBhIFNlbnNvclwiLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgZGVsZXRpbmcgYSBTZW5zb3JcIiwgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBkYXRhYmFzZTogSURhdGFiYXNlKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
