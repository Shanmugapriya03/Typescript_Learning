"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x : " + this.x + " y : " + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value can not bbe less than zero');
            }
            else {
                this.x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
