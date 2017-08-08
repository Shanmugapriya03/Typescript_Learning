var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 2, false, 'a'];
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
;
