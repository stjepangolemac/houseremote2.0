"use strict";
var mongoose = require("mongoose");
mongoose.Promise = require("es6-promise").Promise;
var triggerSchema = new mongoose.Schema({
    duration: {
        default: 300,
        max: 1000,
        min: 0,
        type: Number
    },
    name: {
        maxlength: [32, "name must not be longer than 32 characters"],
        minlength: [4, "name must not be shorter than 4 characters"],
        required: [true, "name is required"],
        type: String
    },
    relay: {
        ref: "Relay",
        type: mongoose.Schema.Types.ObjectId
    }
});
module.exports = mongoose.model("Trigger", triggerSchema);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy90cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUNyQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFNbEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3RDLFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxHQUFHO1FBQ1osR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsNENBQTRDLENBQUM7UUFDN0QsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLDRDQUE0QyxDQUFDO1FBQzVELFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQztRQUNwQyxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLE9BQU87UUFDWixJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtLQUNyQztDQUNGLENBQUMsQ0FBQztBQUVILGlCQUFTLFFBQVEsQ0FBQyxLQUFLLENBQWdCLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyIsImZpbGUiOiJtb2RlbHMvdHJpZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xubW9uZ29vc2UuUHJvbWlzZSA9IHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKS5Qcm9taXNlO1xuXG5pbXBvcnQgeyBJVHJpZ2dlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcblxuaW50ZXJmYWNlIElUcmlnZ2VyTW9kZWwgZXh0ZW5kcyBJVHJpZ2dlciwgbW9uZ29vc2UuRG9jdW1lbnQgeyB9XG5cbmxldCB0cmlnZ2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGR1cmF0aW9uOiB7XG4gICAgZGVmYXVsdDogMzAwLFxuICAgIG1heDogMTAwMCxcbiAgICBtaW46IDAsXG4gICAgdHlwZTogTnVtYmVyLFxuICB9LFxuICBuYW1lOiB7XG4gICAgbWF4bGVuZ3RoOiBbMzIsIFwibmFtZSBtdXN0IG5vdCBiZSBsb25nZXIgdGhhbiAzMiBjaGFyYWN0ZXJzXCJdLFxuICAgIG1pbmxlbmd0aDogWzQsIFwibmFtZSBtdXN0IG5vdCBiZSBzaG9ydGVyIHRoYW4gNCBjaGFyYWN0ZXJzXCJdLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJuYW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbiAgcmVsYXk6IHtcbiAgICByZWY6IFwiUmVsYXlcIixcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gIH0sXG59KTtcblxuZXhwb3J0ID0gbW9uZ29vc2UubW9kZWw8SVRyaWdnZXJNb2RlbD4oXCJUcmlnZ2VyXCIsIHRyaWdnZXJTY2hlbWEpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
