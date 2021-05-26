var movingRect,fixedRect;
var gameSprite1,gameSpeite2,gameSpeite3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
movingRect=createSprite(50,350,70,70);
movingRect.shapeColor="blue";
gameSprite1=createSprite(250,200,50,50);
gameSprite1.shapeColor="yellow";

gameSprite2=createSprite(650,200,50,50);
gameSprite2.shapeColor="brown";

gameSprite3=createSprite(550,200,50,50);
gameSprite3.shapeColor="pink";
}

function draw() {
  background(0);  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;


if(isTouching(movingRect,fixedRect)){
fixedRect.shapeColor="green"
}
else{
  fixedRect.shapeColor="red";
}

if(isTouching(movingRect,gameSprite1)){
  gameSprite1.shapeColor="green";
  
}
else{
  gameSprite1.shapeColor="yellow";
}

if(isTouching(movingRect,gameSprite2)){
  gameSprite2.shapeColor="green";
  
}
else{
  gameSprite2.shapeColor="brown";
}

if(isTouching(movingRect,gameSprite3)){
  gameSprite3.shapeColor="green";
  
}
else{
  gameSprite3.shapeColor="pink";
}
  drawSprites();
}



