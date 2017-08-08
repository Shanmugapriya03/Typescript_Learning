function doSomething(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log("Finally : "+ i);
}
doSomething();
/*when we use var it is accessible to the nearest scope (i.e) var i is in for loop this can accessed by function doSomething
    whereas let is accessibbble only to the scope it is declared*/
/*
function doSomething(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log("Finally : "+ i);
}
doSomething();

*/
