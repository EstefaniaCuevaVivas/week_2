"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(4, 6);
var myPoint2 = new point_1.Point(2, 4);
var myPoint3 = new point_1.Point(1, 3);
var points = [myPoint, myPoint2, myPoint3];
console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint.calculateQuadrant());
console.log(myPoint.calculateNearest(points));
