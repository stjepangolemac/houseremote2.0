"use strict";
var mongoose = require("mongoose");
var es6_promise_1 = require("es6-promise");
var Database = (function () {
    function Database(settings, logger) {
        var _this = this;
        this.connect = function () {
            return new es6_promise_1.Promise(function (resolve, reject) {
                var connectionString = "mongodb://" + _this.settings.databaseOptions.username +
                    ":" + _this.settings.databaseOptions.password +
                    "@" + _this.settings.databaseOptions.url;
                mongoose.connect(connectionString, function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        };
        this.registerConnectionStates = function () {
            mongoose.connection.on("connected", function () {
                _this.logger.info("Database |", "connection state changed to connected");
            });
            mongoose.connection.on("error", function (err) {
                _this.logger.error("Database |", "connection state changed to error", err);
            });
            mongoose.connection.on("disconnected", function () {
                _this.logger.warn("Database |", "connection state changed to disconnected");
            });
        };
        this.settings = settings;
        this.logger = logger;
        this.connect()
            .then(function () { return _this.logger.info("Database |", "successfully connected to database"); })
            .catch(function (err) {
            _this.logger.error("Database |", err);
            throw err;
        });
        this.registerConnectionStates();
    }
    return Database;
}());
exports.__esModule = true;
exports["default"] = Database;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUNyQyw0QkFBd0IsYUFBYSxDQUFDLENBQUE7QUFJdEM7SUFLSSxrQkFBWSxRQUFtQixFQUFFLE1BQWU7UUFMcEQsaUJBZ0RDO1FBOUJVLFlBQU8sR0FBRztZQUNiLE1BQU0sQ0FBQyxJQUFJLHFCQUFPLENBQUMsVUFBQyxPQUE4QixFQUFFLE1BQTZCO2dCQUM3RSxJQUFJLGdCQUFnQixHQUNwQixZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUTtvQkFDckQsR0FBRyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFFBQVE7b0JBQzVDLEdBQUcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7Z0JBRXhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxHQUFHO29CQUNuQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixPQUFPLEVBQUUsQ0FBQztvQkFDZCxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFTSw2QkFBd0IsR0FBRztZQUM5QixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO1lBQzVFLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBbUI7Z0JBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxtQ0FBbUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5RSxDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtnQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7WUFDL0UsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUF6Q0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sRUFBRTthQUNiLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLG9DQUFvQyxDQUFDLEVBQXBFLENBQW9FLENBQUM7YUFDaEYsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxNQUFNLEdBQUcsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQWdDTCxlQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhERDs2QkFnREMsQ0FBQSIsImZpbGUiOiJkYXRhYmFzZS9kYXRhYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gXCJlczYtcHJvbWlzZVwiO1xuXG5pbXBvcnQgeyBJRGF0YWJhc2UsIElTZXR0aW5ncywgSUxvZ2dlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YWJhc2UgaW1wbGVtZW50cyBJRGF0YWJhc2Uge1xuXG4gICAgcHVibGljIHNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgcHVibGljIGxvZ2dlcjogSUxvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBJU2V0dGluZ3MsIGxvZ2dlcjogSUxvZ2dlcikge1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgICAgIHRoaXMuY29ubmVjdCgpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKFwiRGF0YWJhc2UgfFwiLCBcInN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gZGF0YWJhc2VcIikpXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRGF0YWJhc2UgfFwiLCBlcnIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25TdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsIHJlamVjdDogKHZhbHVlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29ubmVjdGlvblN0cmluZyA9XG4gICAgICAgICAgICBcIm1vbmdvZGI6Ly9cIiArIHRoaXMuc2V0dGluZ3MuZGF0YWJhc2VPcHRpb25zLnVzZXJuYW1lICtcbiAgICAgICAgICAgIFwiOlwiICsgdGhpcy5zZXR0aW5ncy5kYXRhYmFzZU9wdGlvbnMucGFzc3dvcmQgK1xuICAgICAgICAgICAgXCJAXCIgKyB0aGlzLnNldHRpbmdzLmRhdGFiYXNlT3B0aW9ucy51cmw7XG5cbiAgICAgICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoY29ubmVjdGlvblN0cmluZywgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDb25uZWN0aW9uU3RhdGVzID0gKCkgPT4ge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKFwiY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJEYXRhYmFzZSB8XCIsIFwiY29ubmVjdGlvbiBzdGF0ZSBjaGFuZ2VkIHRvIGNvbm5lY3RlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImVycm9yXCIsIChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkRhdGFiYXNlIHxcIiwgXCJjb25uZWN0aW9uIHN0YXRlIGNoYW5nZWQgdG8gZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImRpc2Nvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFwiRGF0YWJhc2UgfFwiLCBcImNvbm5lY3Rpb24gc3RhdGUgY2hhbmdlZCB0byBkaXNjb25uZWN0ZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
