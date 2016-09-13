"use strict";
var es6_promise_1 = require("es6-promise");
var DailyTimer = require("../models/dailyTimer");
var response_1 = require("../response/response");
var DailyTimerService = (function () {
    function DailyTimerService(logger, database) {
        var _this = this;
        this.create = function (data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("DailyTimerRepository |", "creating a dailyTimer");
                new DailyTimer(data).save()
                    .then(function (saved) {
                    resolve(new response_1["default"](false, saved, "successfully created a new dailyTimer", true));
                })
                    .catch(function (error) {
                    _this.logger.error("DailyTimerRepository |", "failed to create a new dailyTimer");
                    reject(new response_1["default"](true, error, "error while creating a new dailyTimer", false));
                });
            });
        };
        this.read = function () {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("DailyTimerRepository |", "listing all dailyTimers");
                DailyTimer.find()
                    .then(function (found) {
                    resolve(new response_1["default"](false, found, "successfully found dailyTimers", true));
                })
                    .catch(function (error) {
                    _this.logger.error("DailyTimerRepository |", "failed to find dailyTimers", error);
                    reject(new response_1["default"](true, error, "error while finding dailyTimers", false));
                });
            });
        };
        this.update = function (id, data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("DailyTimerRepository |", "updating a dailyTimer");
                DailyTimer.update({ _id: id }, data)
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully updated a dailyTimer", true)); })
                    .catch(function (error) {
                    _this.logger.error("DailyTimerRepository |", "failed to update dailyTimers", error);
                    reject(new response_1["default"](true, error, "error while updating a dailyTimer", false));
                });
            });
        };
        this.delete = function (id) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("DailyTimerRepository |", "deleting a dailyTimer");
                var query = DailyTimer.remove({ _id: id });
                query.exec()
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully deleted a dailyTimer", true)); })
                    .catch(function (error) {
                    _this.logger.error("DailyTimerRepository |", "error while deleting a dailyTimer", error);
                    reject(new response_1["default"](true, error, "error while deleting a dailyTimer", false));
                });
            });
        };
        this.logger = logger;
        this.database = database;
    }
    return DailyTimerService;
}());
exports.__esModule = true;
exports["default"] = DailyTimerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5VGltZXJSZXBvc2l0b3J5L2RhaWx5VGltZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0QkFBd0IsYUFBYSxDQUFDLENBQUE7QUFHdEMsSUFBTyxVQUFVLFdBQVcsc0JBQXNCLENBQUMsQ0FBQztBQUNwRCx5QkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQThERSwyQkFBWSxNQUFlLEVBQUUsUUFBbUI7UUE5RGxELGlCQWtFQztRQTlEUSxXQUFNLEdBQUcsVUFBQyxJQUFpQjtZQUNoQyxNQUFNLENBQUMsSUFBSSxxQkFBTyxDQUFDLFVBQUMsT0FBNkIsRUFBRSxNQUE0QjtnQkFDN0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztnQkFFcEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO3FCQUMxQixJQUFJLENBQUMsVUFBQyxLQUFrQjtvQkFDdkIsT0FBTyxDQUFDLElBQUkscUJBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLHVDQUF1QyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFxQjtvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztvQkFDakYsTUFBTSxDQUFDLElBQUkscUJBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFHTSxTQUFJLEdBQUc7WUFDWixNQUFNLENBQUMsSUFBSSxxQkFBTyxDQUFDLFVBQUMsT0FBOEIsRUFBRSxNQUE2QjtnQkFDL0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENB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eVRpbWVyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gXCJlczYtcHJvbWlzZVwiO1xuXG5pbXBvcnQgeyBJUmVwb3NpdG9yeSwgSUxvZ2dlciwgSURhdGFiYXNlLCBJRGFpbHlUaW1lciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcbmltcG9ydCBEYWlseVRpbWVyID0gcmVxdWlyZShcIi4uL21vZGVscy9kYWlseVRpbWVyXCIpO1xuaW1wb3J0IFJlc3BvbnNlIGZyb20gXCIuLi9yZXNwb25zZS9yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVRpbWVyU2VydmljZSBpbXBsZW1lbnRzIElSZXBvc2l0b3J5IHtcbiAgcHVibGljIGxvZ2dlcjogSUxvZ2dlcjtcbiAgcHVibGljIGRhdGFiYXNlOiBJRGF0YWJhc2U7XG5cbiAgcHVibGljIGNyZWF0ZSA9IChkYXRhOiBJRGFpbHlUaW1lcikgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlOiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJEYWlseVRpbWVyUmVwb3NpdG9yeSB8XCIsIFwiY3JlYXRpbmcgYSBkYWlseVRpbWVyXCIpO1xuXG4gICAgICBuZXcgRGFpbHlUaW1lcihkYXRhKS5zYXZlKClcbiAgICAgIC50aGVuKChzYXZlZDogSURhaWx5VGltZXIpID0+IHtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIHNhdmVkLCBcInN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbmV3IGRhaWx5VGltZXJcIiwgdHJ1ZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRGFpbHlUaW1lclJlcG9zaXRvcnkgfFwiLCBcImZhaWxlZCB0byBjcmVhdGUgYSBuZXcgZGFpbHlUaW1lclwiKTtcbiAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSBjcmVhdGluZyBhIG5ldyBkYWlseVRpbWVyXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIHJlYWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRGFpbHlUaW1lclJlcG9zaXRvcnkgfFwiLCBcImxpc3RpbmcgYWxsIGRhaWx5VGltZXJzXCIpO1xuXG4gICAgICBEYWlseVRpbWVyLmZpbmQoKVxuICAgICAgLnRoZW4oKGZvdW5kOiBJRGFpbHlUaW1lcltdKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIGZvdW5kLCBcInN1Y2Nlc3NmdWxseSBmb3VuZCBkYWlseVRpbWVyc1wiLCB0cnVlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkRhaWx5VGltZXJSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gZmluZCBkYWlseVRpbWVyc1wiLCBlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSBmaW5kaW5nIGRhaWx5VGltZXJzXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgZGF0YTogSURhaWx5VGltZXIpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJEYWlseVRpbWVyUmVwb3NpdG9yeSB8XCIsIFwidXBkYXRpbmcgYSBkYWlseVRpbWVyXCIpO1xuXG4gICAgICBEYWlseVRpbWVyLnVwZGF0ZSh7IF9pZDogaWQgfSwgZGF0YSlcbiAgICAgIC50aGVuKCgpID0+IHJlc29sdmUobmV3IFJlc3BvbnNlKGZhbHNlLCB7fSwgXCJzdWNjZXNzZnVsbHkgdXBkYXRlZCBhIGRhaWx5VGltZXJcIiwgdHJ1ZSkpKVxuICAgICAgLmNhdGNoKChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJEYWlseVRpbWVyUmVwb3NpdG9yeSB8XCIsIFwiZmFpbGVkIHRvIHVwZGF0ZSBkYWlseVRpbWVyc1wiLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgdXBkYXRpbmcgYSBkYWlseVRpbWVyXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkLCByZWplY3Q6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkRhaWx5VGltZXJSZXBvc2l0b3J5IHxcIiwgXCJkZWxldGluZyBhIGRhaWx5VGltZXJcIik7XG5cbiAgICAgIGxldCBxdWVyeSA9IERhaWx5VGltZXIucmVtb3ZlKHsgX2lkOiBpZCB9KTtcbiAgICAgIHF1ZXJ5LmV4ZWMoKVxuICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIHt9LCBcInN1Y2Nlc3NmdWxseSBkZWxldGVkIGEgZGFpbHlUaW1lclwiLCB0cnVlKSkpXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkRhaWx5VGltZXJSZXBvc2l0b3J5IHxcIiwgXCJlcnJvciB3aGlsZSBkZWxldGluZyBhIGRhaWx5VGltZXJcIiwgZXJyb3IpO1xuICAgICAgICByZWplY3QobmV3IFJlc3BvbnNlKHRydWUsIGVycm9yLCBcImVycm9yIHdoaWxlIGRlbGV0aW5nIGEgZGFpbHlUaW1lclwiLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGRhdGFiYXNlOiBJRGF0YWJhc2UpIHtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
