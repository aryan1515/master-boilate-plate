
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world,boy;
var groundObject;
var treeObj;

function preload()
{
	boy = loadImage("images/boy.png");
   

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    treeObj = new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		width: 1300,
		height: 600,
		wireframes: false
	}
});


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,340,200,300);
  treeObj.display();

  groundObject.display();
  drawSprites();
 

}



