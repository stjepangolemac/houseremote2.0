"use strict";
var mongoose = require("mongoose");
mongoose.Promise = require("es6-promise").Promise;
var sensorSchema = new mongoose.Schema({
    description: {
        maxlength: [128, "description must not be longer than 32 characters"],
        minlength: [16, "description must not be shorter than 4 characters"],
        required: [true, "description is required"],
        type: String
    },
    name: {
        maxlength: [32, "name must not be longer than 32 characters"],
        minlength: [4, "name must not be shorter than 4 characters"],
        required: [true, "name is required"],
        type: String
    },
    pin: {
        required: [true, "pin is required"],
        type: Number
    },
    value: {
        default: 0,
        type: Number
    }
});
module.exports = mongoose.model("sensor", sensorSchema);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zZW5zb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3JDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQU1sRCxJQUFJLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLG1EQUFtRCxDQUFDO1FBQ3JFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxtREFBbUQsQ0FBQztRQUNwRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7UUFDM0MsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSw0Q0FBNEMsQ0FBQztRQUM3RCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsNENBQTRDLENBQUM7UUFDNUQsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDO1FBQ3BDLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxHQUFHLEVBQUU7UUFDSCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUM7UUFDbkMsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLENBQUMsQ0FBQztBQUVILGlCQUFTLFFBQVEsQ0FBQyxLQUFLLENBQWUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Im1vZGVscy9zZW5zb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbm1vbmdvb3NlLlByb21pc2UgPSByZXF1aXJlKFwiZXM2LXByb21pc2VcIikuUHJvbWlzZTtcblxuaW1wb3J0IHsgSVNlbnNvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcblxuaW50ZXJmYWNlIElTZW5zb3JNb2RlbCBleHRlbmRzIElTZW5zb3IsIG1vbmdvb3NlLkRvY3VtZW50IHsgfVxuXG5sZXQgc2Vuc29yU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgbWF4bGVuZ3RoOiBbMTI4LCBcImRlc2NyaXB0aW9uIG11c3Qgbm90IGJlIGxvbmdlciB0aGFuIDMyIGNoYXJhY3RlcnNcIl0sXG4gICAgbWlubGVuZ3RoOiBbMTYsIFwiZGVzY3JpcHRpb24gbXVzdCBub3QgYmUgc2hvcnRlciB0aGFuIDQgY2hhcmFjdGVyc1wiXSxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiZGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIl0sXG4gICAgdHlwZTogU3RyaW5nLFxuICB9LFxuICBuYW1lOiB7XG4gICAgbWF4bGVuZ3RoOiBbMzIsIFwibmFtZSBtdXN0IG5vdCBiZSBsb25nZXIgdGhhbiAzMiBjaGFyYWN0ZXJzXCJdLFxuICAgIG1pbmxlbmd0aDogWzQsIFwibmFtZSBtdXN0IG5vdCBiZSBzaG9ydGVyIHRoYW4gNCBjaGFyYWN0ZXJzXCJdLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJuYW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbiAgcGluOiB7XG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcInBpbiBpcyByZXF1aXJlZFwiXSxcbiAgICB0eXBlOiBOdW1iZXIsXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgZGVmYXVsdDogMCxcbiAgICB0eXBlOiBOdW1iZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0ID0gbW9uZ29vc2UubW9kZWw8SVNlbnNvck1vZGVsPihcInNlbnNvclwiLCBzZW5zb3JTY2hlbWEpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
