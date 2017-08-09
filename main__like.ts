import {likeCount} from './like.component';

let component = new likeCount(10,true);
component.onClick();
console.log("likes count : "+component.likes+"isSelected : "+component.isSelected);
