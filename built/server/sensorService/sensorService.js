"use strict";
var SensorService = (function () {
    function SensorService(logger, repository) {
        var _this = this;
        this.create = function (data) { return _this.repository.create(data); };
        this.read = function () { return _this.repository.read(); };
        this.update = function (id, data) { return _this.repository.update(id, data); };
        this.delete = function (id) { return _this.repository.delete(id); };
        this.logger = logger;
        this.repository = repository;
    }
    return SensorService;
}());
exports.__esModule = true;
exports["default"] = SensorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvclNlcnZpY2Uvc2Vuc29yU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFZRSx1QkFBWSxNQUFlLEVBQUUsVUFBdUI7UUFadEQsaUJBZ0JDO1FBWlEsV0FBTSxHQUFHLFVBQUMsSUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUM7UUFFekQsU0FBSSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUF0QixDQUFzQixDQUFDO1FBRXBDLFdBQU0sR0FBRyxVQUFDLEVBQWtDLEVBQUUsSUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1FBRWpHLFdBQU0sR0FBRyxVQUFDLEVBQWtDLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQztRQUdqRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJEO2tDQWdCQyxDQUFBIiwiZmlsZSI6InNlbnNvclNlcnZpY2Uvc2Vuc29yU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5pbXBvcnQgeyBJU2VydmljZSwgSUxvZ2dlciwgSVJlcG9zaXRvcnksIElTZW5zb3IgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbnNvclNlcnZpY2UgaW1wbGVtZW50cyBJU2VydmljZSB7XG4gIHB1YmxpYyBsb2dnZXI6IElMb2dnZXI7XG4gIHB1YmxpYyByZXBvc2l0b3J5OiBJUmVwb3NpdG9yeTtcblxuICBwdWJsaWMgY3JlYXRlID0gKGRhdGE6IElTZW5zb3IpID0+IHRoaXMucmVwb3NpdG9yeS5jcmVhdGUoZGF0YSk7XG5cbiAgcHVibGljIHJlYWQgPSAoKSA9PiB0aGlzLnJlcG9zaXRvcnkucmVhZCgpO1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoaWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgZGF0YTogSVNlbnNvcikgPT4gdGhpcy5yZXBvc2l0b3J5LnVwZGF0ZShpZCwgZGF0YSk7XG5cbiAgcHVibGljIGRlbGV0ZSA9IChpZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkKSA9PiB0aGlzLnJlcG9zaXRvcnkuZGVsZXRlKGlkKTtcblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
