//variable declaration
var paper1,ground1,side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	//creating engine and adding to the world
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,600);

	ground1 = new Ground(400,height,800,30);

	side1 = new Bin(400,635,20,100)
	side2 = new Bin(600,635,20,100)
	side3 = new Bin(500,675,200,20)

	console.log(paper1.body)
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  paper1.display();
  
  ground1.display();

  side1.display();
  side2.display();
  side3.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}

