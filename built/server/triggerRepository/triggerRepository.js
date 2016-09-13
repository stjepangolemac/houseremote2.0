"use strict";
var es6_promise_1 = require("es6-promise");
var Trigger = require("../models/trigger");
var response_1 = require("../response/response");
var TriggerService = (function () {
    function TriggerService(logger, database) {
        var _this = this;
        this.create = function (data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("TriggerRepository |", "creating a trigger");
                new Trigger(data).save()
                    .then(function (saved) {
                    resolve(new response_1["default"](false, saved, "successfully created a new trigger", true));
                })
                    .catch(function (error) {
                    _this.logger.error("TriggerRepository |", "failed to create a new trigger");
                    reject(new response_1["default"](true, error, "error while creating a new trigger", false));
                });
            });
        };
        this.read = function () {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("TriggerRepository |", "listing all triggers");
                Trigger.find()
                    .then(function (found) {
                    resolve(new response_1["default"](false, found, "successfully found triggers", true));
                })
                    .catch(function (error) {
                    _this.logger.error("TriggerRepository |", "failed to find triggers", error);
                    reject(new response_1["default"](true, error, "error while finding triggers", false));
                });
            });
        };
        this.update = function (id, data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("TriggerRepository |", "updating a trigger");
                Trigger.update({ _id: id }, data)
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully updated a trigger", true)); })
                    .catch(function (error) {
                    _this.logger.error("TriggerRepository |", "failed to update triggers", error);
                    reject(new response_1["default"](true, error, "error while updating a trigger", false));
                });
            });
        };
        this.delete = function (id) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("TriggerRepository |", "deleting a trigger");
                var query = Trigger.remove({ _id: id });
                query.exec()
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully deleted a trigger", true)); })
                    .catch(function (error) {
                    _this.logger.error("TriggerRepository |", "error while deleting a trigger", error);
                    reject(new response_1["default"](true, error, "error while deleting a trigger", false));
                });
            });
        };
        this.logger = logger;
        this.database = database;
    }
    return TriggerService;
}());
exports.__esModule = true;
exports["default"] = TriggerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaWdnZXJSZXBvc2l0b3J5L3RyaWdnZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0QkFBd0IsYUFBYSxDQUFDLENBQUE7QUFHdEMsSUFBTyxPQUFPLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUM5Qyx5QkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQTZERSx3QkFBWSxNQUFlLEVBQUUsUUFBbUI7UUE3RGxELGlCQWlFQztRQTdEUSxXQUFNLEdBQUcsVUFBQyxJQUFjO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLHFCQUFPLENBQUMsVUFBQyxPQUE2QixFQUFFLE1BQTRCO2dCQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7cUJBQ3ZCLElBQUksQ0FBQyxVQUFDLEtBQWU7b0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLHFCQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBcUI7b0JBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLGdDQUFnQyxDQUFDLENBQUM7b0JBQzNFLE1BQU0sQ0FBQyxJQUFJLHFCQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRU0sU0FBSSxHQUFHO1lBQ1osTUFBTSxDQUFDLElBQUkscUJBQU8sQ0FBQyxVQUFDLE9BQThCLEVBQUUsTUFBNkI7Z0JBQy9FLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFx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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSBcImVzNi1wcm9taXNlXCI7XG5cbmltcG9ydCB7IElSZXBvc2l0b3J5LCBJTG9nZ2VyLCBJRGF0YWJhc2UsIElUcmlnZ2VyfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgVHJpZ2dlciA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvdHJpZ2dlclwiKTtcbmltcG9ydCBSZXNwb25zZSBmcm9tIFwiLi4vcmVzcG9uc2UvcmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZ2dlclNlcnZpY2UgaW1wbGVtZW50cyBJUmVwb3NpdG9yeSB7XG4gIHB1YmxpYyBsb2dnZXI6IElMb2dnZXI7XG4gIHB1YmxpYyBkYXRhYmFzZTogSURhdGFiYXNlO1xuXG4gIHB1YmxpYyBjcmVhdGUgPSAoZGF0YTogSVRyaWdnZXIpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogYW55KSA9PiB2b2lkLCByZWplY3Q6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVHJpZ2dlclJlcG9zaXRvcnkgfFwiLCBcImNyZWF0aW5nIGEgdHJpZ2dlclwiKTtcblxuICAgICAgbmV3IFRyaWdnZXIoZGF0YSkuc2F2ZSgpXG4gICAgICAudGhlbigoc2F2ZWQ6IElUcmlnZ2VyKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIHNhdmVkLCBcInN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbmV3IHRyaWdnZXJcIiwgdHJ1ZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJUcmlnZ2VyUmVwb3NpdG9yeSB8XCIsIFwiZmFpbGVkIHRvIGNyZWF0ZSBhIG5ldyB0cmlnZ2VyXCIpO1xuICAgICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgY3JlYXRpbmcgYSBuZXcgdHJpZ2dlclwiLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVhZCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJUcmlnZ2VyUmVwb3NpdG9yeSB8XCIsIFwibGlzdGluZyBhbGwgdHJpZ2dlcnNcIik7XG5cbiAgICAgIFRyaWdnZXIuZmluZCgpXG4gICAgICAudGhlbigoZm91bmQ6IElUcmlnZ2VyW10pID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShmYWxzZSwgZm91bmQsIFwic3VjY2Vzc2Z1bGx5IGZvdW5kIHRyaWdnZXJzXCIsIHRydWUpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiVHJpZ2dlclJlcG9zaXRvcnkgfFwiLCBcImZhaWxlZCB0byBmaW5kIHRyaWdnZXJzXCIsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QobmV3IFJlc3BvbnNlKHRydWUsIGVycm9yLCBcImVycm9yIHdoaWxlIGZpbmRpbmcgdHJpZ2dlcnNcIiwgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSA9IChpZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCBkYXRhOiBJVHJpZ2dlcikgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkLCByZWplY3Q6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRyaWdnZXJSZXBvc2l0b3J5IHxcIiwgXCJ1cGRhdGluZyBhIHRyaWdnZXJcIik7XG5cbiAgICAgIFRyaWdnZXIudXBkYXRlKHsgX2lkOiBpZCB9LCBkYXRhKVxuICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZShuZXcgUmVzcG9uc2UoZmFsc2UsIHt9LCBcInN1Y2Nlc3NmdWxseSB1cGRhdGVkIGEgdHJpZ2dlclwiLCB0cnVlKSkpXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRyaWdnZXJSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gdXBkYXRlIHRyaWdnZXJzXCIsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSB1cGRhdGluZyBhIHRyaWdnZXJcIiwgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZSA9IChpZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVHJpZ2dlclJlcG9zaXRvcnkgfFwiLCBcImRlbGV0aW5nIGEgdHJpZ2dlclwiKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gVHJpZ2dlci5yZW1vdmUoeyBfaWQ6IGlkIH0pO1xuICAgICAgcXVlcnkuZXhlYygpXG4gICAgICAudGhlbigoKSA9PiByZXNvbHZlKG5ldyBSZXNwb25zZShmYWxzZSwge30sIFwic3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgYSB0cmlnZ2VyXCIsIHRydWUpKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiVHJpZ2dlclJlcG9zaXRvcnkgfFwiLCBcImVycm9yIHdoaWxlIGRlbGV0aW5nIGEgdHJpZ2dlclwiLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgZGVsZXRpbmcgYSB0cmlnZ2VyXCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgZGF0YWJhc2U6IElEYXRhYmFzZSkge1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
