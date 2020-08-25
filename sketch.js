var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var packageBody_options = {restitution:0.6, isStatic:true}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);

	if(keyPressed() === true){
		packageBody_options= {restitution:0.6, isStatic:false}
		console.log("done")
		}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	log1 = new Log(400,650,200,20);
	log2 = new Log(300,610,20,100);
	log3 = new Log(500,610,20,100);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
  log1.display();
  log2.display();
  log3.display();
}

function keyPressed() {
	console.log("inside key pressed");
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	console.log("inside if")
  }
}



