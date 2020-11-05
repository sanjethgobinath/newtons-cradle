class Bub {
    constructor(x,y,r){
        var options = {
            'density':1.0,
            'restitution':1,
            'friction':0,
            isStatic:false

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        //this.radius = radius;
        World.add(world, this.body)
    }
    display(){
       var paperpos=this.body.position
       push()
       translate(paperpos.x,paperpos.y)
       ellipse(0,0, this.r,this.r);
       pop()


    }
}