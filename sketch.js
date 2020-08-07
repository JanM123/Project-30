const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine, world;
var base1, base2, ground;
var polygon;
var slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28;
var block29, block30, block31, block32, block33, block34, block35, block36, block37, block38;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  base1 = new Base(490, 500, 320, 20);
  base2 = new Base(895, 300, 200, 20);

  polygon = new Polygon(50, 300);

  slingshot = new Slingshot(polygon.body, {x:75, y:300});
  
  ground = new Base(600, 590, 1200, 20);

  //level one
  block1 = new Block(375, 470, 40, 40);
  block2 = new Block(415, 470, 40, 40);
  block3 = new Block(455, 470, 40, 40);
  block4 = new Block(495, 470, 40, 40);
  block5 = new Block(535, 470, 40, 40);
  block6 = new Block(575, 470, 40, 40);
  block7 = new Block(615, 470, 40, 40);

  //level two
  block8 = new Block(395, 430, 40, 40);
  block9 = new Block(435, 430, 40, 40);
  block10 = new Block(475, 430, 40, 40);
  block11 = new Block(515, 430, 40, 40);
  block12 = new Block(555, 430, 40, 40);
  block13 = new Block(595, 430, 40, 40);

  //level three
  block14 = new Block(415, 390, 40, 40);
  block15 = new Block(455, 390, 40, 40);
  block16 = new Block(495, 390, 40, 40);
  block17 = new Block(535, 390, 40, 40);
  block18 = new Block(575, 390, 40, 40);

  //level four
  block19 = new Block(435, 350, 40, 40);
  block20 = new Block(475, 350, 40, 40);
  block21 = new Block(515, 350, 40, 40);
  block22 = new Block(555, 350, 40, 40);

  //level five
  block23 = new Block(455, 310, 40, 40);
  block24 = new Block(495, 310, 40, 40);
  block25 = new Block(535, 310, 40, 40);

  //level six
  block26 = new Block(475, 270, 40, 40);
  block27 = new Block(515, 270, 40, 40);

  //level seven
  block28 = new Block(495, 230, 40, 40);


  //level one
  block29 = new Block(835, 270, 40, 40);
  block30 = new Block(875, 270, 40, 40);
  block31 = new Block(915, 270, 40, 40);
  block32 = new Block(955, 270, 40, 40);

  //level two
  block33 = new Block(855, 230, 40, 40);
  block34 = new Block(895, 230, 40, 40);
  block35 = new Block(935, 230, 40, 40);

  //level three
  block36 = new Block(875, 190, 40, 40);
  block37 = new Block(915, 190, 40, 40);

  //level four
  block38 = new Block(895, 150, 40, 40);

}

function draw() {
  background(255, 255, 255);  
  Engine.update(engine);
  
  base1.display();
  base2.display();

  ground.display();

  slingshot.display();

  push();
  //level one
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level two
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  //level three
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  //level four
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  //level five
  block23.display();
  block24.display();
  block25.display();

  //level six
  block26.display();
  block27.display();

  //level seven
  block28.display();
  pop();

  push();
  fill("red");
  //level one
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  //level two
  block33.display();
  block34.display();
  block35.display();

  //level three
  block36.display();
  block37.display();

  //level four
  block38.display();
  pop();

  polygon.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
   if(keyCode === 32) {
      slingshot.attach(polygon.body);
   }
}