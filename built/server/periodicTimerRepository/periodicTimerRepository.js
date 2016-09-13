"use strict";
var es6_promise_1 = require("es6-promise");
var PeriodicTimer = require("../models/periodicTimer");
var response_1 = require("../response/response");
var PeriodicTimerService = (function () {
    function PeriodicTimerService(logger, database) {
        var _this = this;
        this.create = function (data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("PeriodicTimerRepository |", "creating a periodicTimer");
                new PeriodicTimer(data).save()
                    .then(function (saved) {
                    resolve(new response_1["default"](false, saved, "successfully created a new periodicTimer", true));
                })
                    .catch(function (error) {
                    _this.logger.error("PeriodicTimerRepository |", "failed to create a new periodicTimer");
                    reject(new response_1["default"](true, error, "error while creating a new periodicTimer", false));
                });
            });
        };
        this.read = function () {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("PeriodicTimerRepository |", "listing all periodicTimers");
                PeriodicTimer.find()
                    .then(function (found) {
                    resolve(new response_1["default"](false, found, "successfully found periodicTimers", true));
                })
                    .catch(function (error) {
                    _this.logger.error("PeriodicTimerRepository |", "failed to find periodicTimers", error);
                    reject(new response_1["default"](true, error, "error while finding periodicTimers", false));
                });
            });
        };
        this.update = function (id, data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("PeriodicTimerRepository |", "updating a periodicTimer");
                PeriodicTimer.update({ _id: id }, data)
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully updated a periodicTimer", true)); })
                    .catch(function (error) {
                    _this.logger.error("PeriodicTimerRepository |", "failed to update periodicTimers", error);
                    reject(new response_1["default"](true, error, "error while updating a periodicTimer", false));
                });
            });
        };
        this.delete = function (id) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("PeriodicTimerRepository |", "deleting a periodicTimer");
                var query = PeriodicTimer.remove({ _id: id });
                query.exec()
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully deleted a periodicTimer", true)); })
                    .catch(function (error) {
                    _this.logger.error("PeriodicTimerRepository |", "error while deleting a periodicTimer", error);
                    reject(new response_1["default"](true, error, "error while deleting a periodicTimer", false));
                });
            });
        };
        this.logger = logger;
        this.database = database;
    }
    return PeriodicTimerService;
}());
exports.__esModule = true;
exports["default"] = PeriodicTimerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlvZGljVGltZXJSZXBvc2l0b3J5L3BlcmlvZGljVGltZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0QkFBd0IsYUFBYSxDQUFDLENBQUE7QUFHdEMsSUFBTyxhQUFhLFdBQVcseUJBQXlCLENBQUMsQ0FBQztBQUMxRCx5QkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQThERSw4QkFBWSxNQUFlLEVBQUUsUUFBbUI7UUE5RGxELGlCQWtFQztRQTlEUSxXQUFNLEdBQUcsVUFBQyxJQUFvQjtZQUNuQyxNQUFNLENBQUMsSUFBSSxxQkFBTyxDQUFDLFVBQUMsT0FBNkIsRUFBRSxNQUE0QjtnQkFDN0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztnQkFFMUUsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO3FCQUM3QixJQUFJLENBQUMsVUFBQyxLQUFxQjtvQkFDMUIsT0FBTyxDQUFDLElBQUkscUJBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDBDQUEwQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFxQjtvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztvQkFDdkYsTUFBTSxDQUFDLElBQUkscUJBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLDBDQUEwQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFHTSxTQUFJLEdBQUc7WUFDWixNQUFNLENBQUMsSUFBSSxxQkFBTyxDQUFDLFVBQUMsT0FBOEIsRUFBRSxNQUE2QjtnQkFDL0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJ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dG9yeS9wZXJpb2RpY1RpbWVyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gXCJlczYtcHJvbWlzZVwiO1xuXG5pbXBvcnQgeyBJUmVwb3NpdG9yeSwgSUxvZ2dlciwgSURhdGFiYXNlLCBJUGVyaW9kaWNUaW1lciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcbmltcG9ydCBQZXJpb2RpY1RpbWVyID0gcmVxdWlyZShcIi4uL21vZGVscy9wZXJpb2RpY1RpbWVyXCIpO1xuaW1wb3J0IFJlc3BvbnNlIGZyb20gXCIuLi9yZXNwb25zZS9yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpb2RpY1RpbWVyU2VydmljZSBpbXBsZW1lbnRzIElSZXBvc2l0b3J5IHtcbiAgcHVibGljIGxvZ2dlcjogSUxvZ2dlcjtcbiAgcHVibGljIGRhdGFiYXNlOiBJRGF0YWJhc2U7XG5cbiAgcHVibGljIGNyZWF0ZSA9IChkYXRhOiBJUGVyaW9kaWNUaW1lcikgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlOiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJQZXJpb2RpY1RpbWVyUmVwb3NpdG9yeSB8XCIsIFwiY3JlYXRpbmcgYSBwZXJpb2RpY1RpbWVyXCIpO1xuXG4gICAgICBuZXcgUGVyaW9kaWNUaW1lcihkYXRhKS5zYXZlKClcbiAgICAgIC50aGVuKChzYXZlZDogSVBlcmlvZGljVGltZXIpID0+IHtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIHNhdmVkLCBcInN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbmV3IHBlcmlvZGljVGltZXJcIiwgdHJ1ZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiUGVyaW9kaWNUaW1lclJlcG9zaXRvcnkgfFwiLCBcImZhaWxlZCB0byBjcmVhdGUgYSBuZXcgcGVyaW9kaWNUaW1lclwiKTtcbiAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSBjcmVhdGluZyBhIG5ldyBwZXJpb2RpY1RpbWVyXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIHJlYWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiUGVyaW9kaWNUaW1lclJlcG9zaXRvcnkgfFwiLCBcImxpc3RpbmcgYWxsIHBlcmlvZGljVGltZXJzXCIpO1xuXG4gICAgICBQZXJpb2RpY1RpbWVyLmZpbmQoKVxuICAgICAgLnRoZW4oKGZvdW5kOiBJUGVyaW9kaWNUaW1lcltdKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIGZvdW5kLCBcInN1Y2Nlc3NmdWxseSBmb3VuZCBwZXJpb2RpY1RpbWVyc1wiLCB0cnVlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlBlcmlvZGljVGltZXJSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gZmluZCBwZXJpb2RpY1RpbWVyc1wiLCBlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSBmaW5kaW5nIHBlcmlvZGljVGltZXJzXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgZGF0YTogSVBlcmlvZGljVGltZXIpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJQZXJpb2RpY1RpbWVyUmVwb3NpdG9yeSB8XCIsIFwidXBkYXRpbmcgYSBwZXJpb2RpY1RpbWVyXCIpO1xuXG4gICAgICBQZXJpb2RpY1RpbWVyLnVwZGF0ZSh7IF9pZDogaWQgfSwgZGF0YSlcbiAgICAgIC50aGVuKCgpID0+IHJlc29sdmUobmV3IFJlc3BvbnNlKGZhbHNlLCB7fSwgXCJzdWNjZXNzZnVsbHkgdXBkYXRlZCBhIHBlcmlvZGljVGltZXJcIiwgdHJ1ZSkpKVxuICAgICAgLmNhdGNoKChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJQZXJpb2RpY1RpbWVyUmVwb3NpdG9yeSB8XCIsIFwiZmFpbGVkIHRvIHVwZGF0ZSBwZXJpb2RpY1RpbWVyc1wiLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgdXBkYXRpbmcgYSBwZXJpb2RpY1RpbWVyXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkLCByZWplY3Q6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlBlcmlvZGljVGltZXJSZXBvc2l0b3J5IHxcIiwgXCJkZWxldGluZyBhIHBlcmlvZGljVGltZXJcIik7XG5cbiAgICAgIGxldCBxdWVyeSA9IFBlcmlvZGljVGltZXIucmVtb3ZlKHsgX2lkOiBpZCB9KTtcbiAgICAgIHF1ZXJ5LmV4ZWMoKVxuICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIHt9LCBcInN1Y2Nlc3NmdWxseSBkZWxldGVkIGEgcGVyaW9kaWNUaW1lclwiLCB0cnVlKSkpXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlBlcmlvZGljVGltZXJSZXBvc2l0b3J5IHxcIiwgXCJlcnJvciB3aGlsZSBkZWxldGluZyBhIHBlcmlvZGljVGltZXJcIiwgZXJyb3IpO1xuICAgICAgICByZWplY3QobmV3IFJlc3BvbnNlKHRydWUsIGVycm9yLCBcImVycm9yIHdoaWxlIGRlbGV0aW5nIGEgcGVyaW9kaWNUaW1lclwiLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGRhdGFiYXNlOiBJRGF0YWJhc2UpIHtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
