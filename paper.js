class Paper{
    constructor(x,y)
    {
        var options=
        {
            'friction':0.5,
            'isStatic':false,
            'restitution':0.3,
            'density':1.2
        } 
    this.body=Bodies.rectangle(x,y,25,25,options)
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("teal");
        ellipse(0,0,25,25);
        pop();
    }
}