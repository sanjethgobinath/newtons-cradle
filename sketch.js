
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob = new Bub(150,400,20);

	roof = new Roof(width/2, height/4,width/7,20);


	Engine.run(engine);
  
}


function draw() {
  background(255);
  // Engine.update(engine);
  
  Bob.display();
  roof.display();
 

  
 
}



