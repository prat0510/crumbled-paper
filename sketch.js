const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, paperball,ground;	
var world;


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1 = new Dustbin(800,660,100,10);
	dustbin2 = new Dustbin(750,640,10,50);
	dustbin3 = new Dustbin(850,640,10,50);
	
	paperball = new Paperball(200,650,20);

	ground = new Ground(500,675,1000,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	Engine.run(engine);
	//Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paperball.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:30,y:-30});   
  	}
}
