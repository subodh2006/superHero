const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;  
var hero1,monster1;
var backgroundimg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground1;
var chain1;
var ground2;

function preload() {
backgroundimg = loadImage("sky.png")

}

function setup() {
  createCanvas(1535, 740);
  engine = Engine.create();
  world = engine.world;


  hero1 = new Hero(200,400,300,150);
monster1 = new monster(1200,400,150,300);

box1 = new Box (700,20,50,50);
box2 = new Box(700,20,50,50);
box3 = new Box (750,20,50,50);
box4 = new Box(800,20,50,50);
box5 = new Box (750,40,50,50);
box6 = new Box (700,50,50,50);
box7 = new Box (700,20,50,50);
box8 = new Box (650,20,50,50);
box9 = new Box (650,20,50,50);
box10 = new Box (600,20,50,50);
chain1 = new Chain(hero1.body,{x:200,y:400});

ground1 = new Ground(700,650,500,15);
ground2 = new Ground(1200,600,200,15);

}

function draw() {
  if(backgroundimg)
  background(backgroundimg);

  Engine.update(engine);

hero1.display();
monster1.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
ground1.display();
//drawSprites()

}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode===32){
   chain1.attach(hero1.body);
  }
}