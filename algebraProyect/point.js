"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (newx) {
        this.x = newx;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (newy) {
        this.y = newy;
    };
    Point.prototype.toString = function () {
        var variable1 = String(this.x);
        var variable2 = String(this.y);
        return "\"(".concat(variable1, ",").concat(variable2, ")\"");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var diferenciaX = this.getX() - anotherPoint.getX();
        var diferenciaY = this.getY() - anotherPoint.getY();
        return Math.sqrt(diferenciaX * diferenciaX) + (diferenciaY * diferenciaY);
    };
    return Point;
}());
exports.Point = Point;