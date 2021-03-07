const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var box1,box2,box3,box4,box5,box6;
var super_img,vilain_img,monster_img;

function preload(){
  super_img = loadImage("project.png");
  vilain_img = loadImage("pole.png");
  monster_img = loadImage("monster.png")
  }


function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
  box1 = new Box(650,580,70,70);
  box2 = new Box(650,500,70,70);
  box3 = new Box(650,420,70,70);
  box4 = new Box(650,340,70,70);
  box5 = new Box(650,260,70,70);
  box6 = new Box(650,180,70,70);
  
  
  ball = new Ball(200,200,80)
  slingShot = new Rope(ball.body,{x:500,y:50});

}



function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
 

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  
  ball.display();
//  imageMode(CENTER)
  //image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

