"use strict";
var DailyTimerService = (function () {
    function DailyTimerService(logger, repository) {
        var _this = this;
        this.create = function (data) { return _this.repository.create(data); };
        this.read = function () { return _this.repository.read(); };
        this.update = function (id, data) { return _this.repository.update(id, data); };
        this.delete = function (id) { return _this.repository.delete(id); };
        this.logger = logger;
        this.repository = repository;
    }
    return DailyTimerService;
}());
exports.__esModule = true;
exports["default"] = DailyTimerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5VGltZXJTZXJ2aWNlL2RhaWx5VGltZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQTtJQVlFLDJCQUFZLE1BQWUsRUFBRSxVQUF1QjtRQVp0RCxpQkFnQkM7UUFaUSxXQUFNLEdBQUcsVUFBQyxJQUFpQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUM7UUFFN0QsU0FBSSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUF0QixDQUFzQixDQUFDO1FBRXBDLFdBQU0sR0FBRyxVQUFDLEVBQWtDLEVBQUUsSUFBaUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztRQUVyRyxXQUFNLEdBQUcsVUFBQyxFQUFrQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQTFCLENBQTBCLENBQUM7UUFHakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCRDtzQ0FnQkMsQ0FBQSIsImZpbGUiOiJkYWlseVRpbWVyU2VydmljZS9kYWlseVRpbWVyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5pbXBvcnQgeyBJU2VydmljZSwgSUxvZ2dlciwgSVJlcG9zaXRvcnksIElEYWlseVRpbWVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVRpbWVyU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlIHtcbiAgcHVibGljIGxvZ2dlcjogSUxvZ2dlcjtcbiAgcHVibGljIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5O1xuXG4gIHB1YmxpYyBjcmVhdGUgPSAoZGF0YTogSURhaWx5VGltZXIpID0+IHRoaXMucmVwb3NpdG9yeS5jcmVhdGUoZGF0YSk7XG5cbiAgcHVibGljIHJlYWQgPSAoKSA9PiB0aGlzLnJlcG9zaXRvcnkucmVhZCgpO1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgZGF0YTogSURhaWx5VGltZXIpID0+IHRoaXMucmVwb3NpdG9yeS51cGRhdGUoaWQsIGRhdGEpO1xuXG4gIHB1YmxpYyBkZWxldGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCkgPT4gdGhpcy5yZXBvc2l0b3J5LmRlbGV0ZShpZCk7XG5cbiAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCByZXBvc2l0b3J5OiBJUmVwb3NpdG9yeSkge1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
