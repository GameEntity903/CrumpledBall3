var boxLeft,boxRight,boxBottom;
var boxB,boxL,boxR;
var ground,gground;
var ball,ing,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	ing = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1300, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  boxBottom=createSprite(1000,440,200,40);
  boxBottom.addImage(ing);
  boxBottom.scale=0.9;
	boxRight=createSprite(1100,500,20,300);
	boxLeft=createSprite(900,500,20,300);
	gground=createSprite(650,640,1300,100)

	boxB = Bodies.rectangle(1000,440,200,40,{isStatic:true});
	World.add(world, boxB)
	boxL  = Bodies.rectangle(1100,500,20,300,{isStatic:true});
	World.add(world, boxL)
	boxR  = Bodies.rectangle(900,500,20,300,{isStatic:true});
	World.add(world, boxR)
  
  
	ground = Bodies.rectangle(650,640,1300,100,{isStatic:true});
 	World.add(world, ground);

  ball = new Ball(200,50,70,70);
  launcher = new Launcher(ball.body,{x:200,y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  boxBottom.x = boxB.position.x 
  boxBottom.y = boxB.position.y
  boxLeft.x = boxL.position.x 
  boxLeft.y = boxL.position.y
  boxRight.x = boxR.position.x 
  boxRight.y = boxR.position.y
  gground.y = ground.position.y
  gground.x = ground.position.x
  boxBottom.shapeColor="green";
  boxLeft.shapeColor="green";
  boxRight.shapeColor="green";
  gground.shapeColor="yellow";
  boxB.isStatic = true
  boxL.isStatic = true
  boxR.isStatic = true
  gground.isStatic = true
  ball.display();
  launcher.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}