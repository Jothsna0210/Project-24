class Bin{
    constructor(x,y,width,height)
    {
        var options =
        {
            'isStatic':true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke(255,8,74);
        fill(255,8,74);
        rect(0, 0, this.width, this.height);
        pop();
      }
}