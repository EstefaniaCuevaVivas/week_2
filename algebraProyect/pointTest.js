"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(7, 8);
var myPoint2 = new point_1.Point(2, 3);
console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint2));
