
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1200, 700);

    bobDiameter = 100;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,600);
	bob2 = new Bob(500,600);
	bob3 = new Bob(600,600);
	bob4 = new Bob(700,600);
	bob5 = new Bob(800,600);
	roof = new Roof();
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*-1,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*-2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(564,747,8);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){
	
	Body.applyForce(bob1.body,bob1.body.positon,{x:-500,y:500});
	
	}
	
	}



