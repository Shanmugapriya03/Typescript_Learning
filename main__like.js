"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.likeCount(10, true);
component.onClick();
console.log("likes count : " + component.likes + "isSelected : " + component.isSelected);