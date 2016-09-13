"use strict";
var es6_promise_1 = require("es6-promise");
var Relay = require("../models/relay");
var response_1 = require("../response/response");
var RelayService = (function () {
    function RelayService(logger, database) {
        var _this = this;
        this.create = function (data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("RelayRepository |", "creating a relay");
                new Relay(data).save()
                    .then(function (saved) {
                    resolve(new response_1["default"](false, saved, "successfully created a new relay", true));
                })
                    .catch(function (error) {
                    _this.logger.error("RelayRepository |", "failed to create a new relay");
                    reject(new response_1["default"](true, error, "error while creating a new relay", false));
                });
            });
        };
        this.read = function () {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("RelayRepository |", "listing all relays");
                Relay.find()
                    .then(function (found) {
                    resolve(new response_1["default"](false, found, "successfully found relays", true));
                })
                    .catch(function (error) {
                    _this.logger.error("RelayRepository |", "failed to find relays", error);
                    reject(new response_1["default"](true, error, "error while finding relays", false));
                });
            });
        };
        this.update = function (id, data) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("RelayRepository |", "updating a relay");
                Relay.update({ _id: id }, data)
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully updated a relay", true)); })
                    .catch(function (error) {
                    _this.logger.error("RelayRepository |", "failed to update relays", error);
                    reject(new response_1["default"](true, error, "error while updating a relay", false));
                });
            });
        };
        this.delete = function (id) {
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.logger.info("RelayRepository |", "deleting a relay");
                var query = Relay.remove({ _id: id });
                query.exec()
                    .then(function () { return resolve(new response_1["default"](false, {}, "successfully deleted a relay", true)); })
                    .catch(function (error) {
                    _this.logger.error("RelayRepository |", "error while deleting a relay", error);
                    reject(new response_1["default"](true, error, "error while deleting a relay", false));
                });
            });
        };
        this.logger = logger;
        this.database = database;
    }
    return RelayService;
}());
exports.__esModule = true;
exports["default"] = RelayService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF5UmVwb3NpdG9yeS9yZWxheVJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRCQUF3QixhQUFhLENBQUMsQ0FBQTtBQUd0QyxJQUFPLEtBQUssV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDLHlCQUFxQixzQkFBc0IsQ0FBQyxDQUFBO0FBRTVDO0lBOERFLHNCQUFZLE1BQWUsRUFBRSxRQUFtQjtRQTlEbEQsaUJBa0VDO1FBOURRLFdBQU0sR0FBRyxVQUFDLElBQVk7WUFDM0IsTUFBTSxDQUFDLElBQUkscUJBQU8sQ0FBQyxVQUFDLE9BQTZCLEVBQUUsTUFBNEI7Z0JBQzdFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBRTFELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtxQkFDckIsSUFBSSxDQUFDLFVBQUMsS0FBYTtvQkFDbEIsT0FBTyxDQUFDLElBQUkscUJBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFxQjtvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsOEJBQThCLENBQUMsQ0FBQztvQkFDdkUsTUFBTSxDQUFDLElBQUkscUJBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFHTSxTQUFJLEdBQUc7WUFDWixNQUFNLENBQUMsSUFBSSxxQkFBTyxDQUFDLFVBQUMsT0FBOEIsRUFBRSxNQUE2QjtnQkFDL0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFFNUQsS0FBSyxDQUFDLElBQUksRUFBRTtxQkFDWCxJQUFJLENBQUMsVUFBQyxLQUFlO29CQUNsQixPQUFPLENBQUMsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0UsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEtBQXFCO29CQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdkUsTUFBTSxDQUFDLElBQUkscUJBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFTSxXQUFNLEdBQUcsVUFBQyxFQUFrQyxFQUFFLElBQVk7WUFDL0QsTUFBTSxDQUFDLElBQUkscUJBQU8sQ0FBQyxVQUFDLE9BQThCLEVBQUUsTUFBNkI7Z0JBQy9FLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBRTFELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO3FCQUM5QixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxJQUFJLHFCQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxDQUFDO3FCQUNsRixLQUFLLENBQUMsVUFBQyxLQUFxQjtvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxJQUFJLHFCQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRU0sV0FBTSxHQUFHLFVBQUMsRUFBa0M7WUFDakQsTUFBTSxDQUFDLElBQUkscUJBQU8sQ0FBQyxVQUFDLE9BQThCLEVBQUUsTUFBNkI7Z0JBQy9FLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBRTFELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxDQUFDLElBQUksRUFBRTtxQkFDWCxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxJQUFJLHFCQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxDQUFDO3FCQUNsRixLQUFLLENBQUMsVUFBQyxLQUFxQjtvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzlFLE1BQU0sQ0FBQyxJQUFJLHFCQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBR0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQTtBQWxFRDtpQ0FrRUMsQ0FBQSIsImZpbGUiOiJyZWxheVJlcG9zaXRvcnkvcmVsYXlSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSBcImVzNi1wcm9taXNlXCI7XG5cbmltcG9ydCB7IElSZXBvc2l0b3J5LCBJTG9nZ2VyLCBJRGF0YWJhc2UsIElSZWxheSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcbmltcG9ydCBSZWxheSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcmVsYXlcIik7XG5pbXBvcnQgUmVzcG9uc2UgZnJvbSBcIi4uL3Jlc3BvbnNlL3Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF5U2VydmljZSBpbXBsZW1lbnRzIElSZXBvc2l0b3J5IHtcbiAgcHVibGljIGxvZ2dlcjogSUxvZ2dlcjtcbiAgcHVibGljIGRhdGFiYXNlOiBJRGF0YWJhc2U7XG5cbiAgcHVibGljIGNyZWF0ZSA9IChkYXRhOiBJUmVsYXkpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogYW55KSA9PiB2b2lkLCByZWplY3Q6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiUmVsYXlSZXBvc2l0b3J5IHxcIiwgXCJjcmVhdGluZyBhIHJlbGF5XCIpO1xuXG4gICAgICBuZXcgUmVsYXkoZGF0YSkuc2F2ZSgpXG4gICAgICAudGhlbigoc2F2ZWQ6IElSZWxheSkgPT4ge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShmYWxzZSwgc2F2ZWQsIFwic3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBuZXcgcmVsYXlcIiwgdHJ1ZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiUmVsYXlSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gY3JlYXRlIGEgbmV3IHJlbGF5XCIpO1xuICAgICAgICByZWplY3QobmV3IFJlc3BvbnNlKHRydWUsIGVycm9yLCBcImVycm9yIHdoaWxlIGNyZWF0aW5nIGEgbmV3IHJlbGF5XCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIHJlYWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiUmVsYXlSZXBvc2l0b3J5IHxcIiwgXCJsaXN0aW5nIGFsbCByZWxheXNcIik7XG5cbiAgICAgIFJlbGF5LmZpbmQoKVxuICAgICAgLnRoZW4oKGZvdW5kOiBJUmVsYXlbXSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGZhbHNlLCBmb3VuZCwgXCJzdWNjZXNzZnVsbHkgZm91bmQgcmVsYXlzXCIsIHRydWUpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiUmVsYXlSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gZmluZCByZWxheXNcIiwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgZmluZGluZyByZWxheXNcIiwgZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSA9IChpZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCBkYXRhOiBJUmVsYXkpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJSZWxheVJlcG9zaXRvcnkgfFwiLCBcInVwZGF0aW5nIGEgcmVsYXlcIik7XG5cbiAgICAgIFJlbGF5LnVwZGF0ZSh7IF9pZDogaWQgfSwgZGF0YSlcbiAgICAgIC50aGVuKCgpID0+IHJlc29sdmUobmV3IFJlc3BvbnNlKGZhbHNlLCB7fSwgXCJzdWNjZXNzZnVsbHkgdXBkYXRlZCBhIHJlbGF5XCIsIHRydWUpKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiUmVsYXlSZXBvc2l0b3J5IHxcIiwgXCJmYWlsZWQgdG8gdXBkYXRlIHJlbGF5c1wiLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChuZXcgUmVzcG9uc2UodHJ1ZSwgZXJyb3IsIFwiZXJyb3Igd2hpbGUgdXBkYXRpbmcgYSByZWxheVwiLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlID0gKGlkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJSZWxheVJlcG9zaXRvcnkgfFwiLCBcImRlbGV0aW5nIGEgcmVsYXlcIik7XG5cbiAgICAgIGxldCBxdWVyeSA9IFJlbGF5LnJlbW92ZSh7IF9pZDogaWQgfSk7XG4gICAgICBxdWVyeS5leGVjKClcbiAgICAgIC50aGVuKCgpID0+IHJlc29sdmUobmV3IFJlc3BvbnNlKGZhbHNlLCB7fSwgXCJzdWNjZXNzZnVsbHkgZGVsZXRlZCBhIHJlbGF5XCIsIHRydWUpKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiUmVsYXlSZXBvc2l0b3J5IHxcIiwgXCJlcnJvciB3aGlsZSBkZWxldGluZyBhIHJlbGF5XCIsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KG5ldyBSZXNwb25zZSh0cnVlLCBlcnJvciwgXCJlcnJvciB3aGlsZSBkZWxldGluZyBhIHJlbGF5XCIsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgZGF0YWJhc2U6IElEYXRhYmFzZSkge1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
