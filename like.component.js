"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likeCount = (function () {
    function likeCount(_likes, _isSelected) {
        this._likes = _likes;
        this._isSelected = _isSelected;
    }
    likeCount.prototype.onClick = function () {
        this._likes += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(likeCount.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(likeCount.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return likeCount;
}());
exports.likeCount = likeCount;
