class Point{
    x:number;
    y:number;
    constructor(x ?: number,y ?: number){
        this.x=x;
        this.y=y;
    }
    draw(){
        console.log("x : "+this.x+" y : "+this.y);
    }
    get X(){
        return this.x;
    }
    set X(value){
        if(value < 0){
            throw new Error('value can not bbe less than zero');
        }else{
            this.x=value;
        }
    }
}
let point = new Point();
point.X=10;
point.draw();
