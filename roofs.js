class Roof {
    constructor(){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,100,600,150,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        fill(32,966,496)
        rect(pos.x,pos.y,600,150);
        
    }}