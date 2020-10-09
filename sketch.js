const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var gameState = "onSling";
var engine,world;
var ground,ground2,block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var slingshot;
var score=0;
function preload(){
  imageMode(CENTER)
  iamge(poly_img ,polygon.position.x,polygon.position.y,40,40);
}
function setup() {
  engine = Engine.create();
  var canvas = createCanvas(1200,400);
  
  world = engine.world;

  ground= new Ground(400,height,400,10)
  ground2= new Ground(390,100,200,10)

  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);

  polygon= Bodies.ciecle(50,200,20);
  World.add(world,polygon)

  slingshot = new SlingShot(this.polygon,{x:100,y:200})
}
function draw() {
  background(255,255,255);
  Engine.update(engine);  
  drawSprites();
  score=score+1;

  ground= new Ground(400,height,400,10)
  ground2= new Ground(390,100,200,10)

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display(); 
  block8.display(); 
  block9.display(); 
  polygon.display();
  slingshot.display();
  text("score:"+score,750,40);
}


function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keypressed(){
  
  if(keydown == SPACE){
    slingshot.attach(polygon.body)
  }
}