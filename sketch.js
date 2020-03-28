const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;

function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
   world = engine.world;
   
  box1 = new Box (600,250,30,370);
  box2 = new Box (130,250,30,370);
  box3 = new Box (500,300,90,200);
  box4 = new Box (410,250,80,300);
  box5 = new Box (340,290,70,250);
  box6 = new Box (280,260,60,300);
  box7 = new Box (220,270,70,290);

}

function draw() {
  background(0); 
  Engine.update(engine);
  console.log(mouseX,mouseY);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  triangle(115,64,145,64,132,32);
  triangle(183,121,254,123,217,74);
  triangle(312,161,376,162,344,108);
  triangle(454,196,544,197,500,136);
  triangle(583,63,614,62,597,34);

}
