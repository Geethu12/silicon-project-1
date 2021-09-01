var bg;
var kids,adults,elders;
var button1,button2,button3;
var kidsimg,adultsimg,eldersimg;
var title1,title2,title3;
var gameState=1
function preload(){
  bg=loadImage("bg.jpg");
  bg1=loadImage("yoga bg.jpg");
  kidsimg=loadImage("kids yoga.jpg");
  adultsimg=loadImage("adults yoga.jpg");
  eldersimg=loadImage("elder yoga.jpg");
  sloganImg=loadImage("s.jpg");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  kids=createSprite(400, 200, 50, 50);
  kids.addImage(kidsimg);
  kids.scale=0.2;
  adults=createSprite(700,200,50,50);
  adults.addImage(adultsimg);
  adults.scale=0.9;
  elders=createSprite(1000,200,50,50);
  elders.addImage(eldersimg);
  elders.scale=0.34;
  slogan=createSprite(700,600,50,50);
  slogan.addImage(sloganImg);
  slogan.scale=0.3;
  button1=createImg('start.png');
  button1.position(350,300);
  button1.size(100,100);
  button1.mouseClicked(kidsyoga);

  button2=createImg('start.png');
  button2.position(650,300);
  button2.size(100,100);
  button2.mouseClicked(adultsyoga);

  button3=createImg('start.png');
  button3.position(950,300);
  button3.size(100,100);
  button3.mouseClicked(eldersyoga);
}

function draw() {
  background(bg);  
  
  drawSprites();
 
  if(gameState===1){
   
    
    textSize(30);
    fill("black");
    text("KIDS YOGA",315,40);
    text("ADULTS YOGA",585,40);
    text("ELDERS YOGA",890,40);
    
  }
  if(gameState===2){
    background(bg1);
  }
  
}
function kidsyoga(){
  kids.visible=false;
  button1.hide();
  adults.visible=false;
  button2.hide();
  elders.visible=false;
  slogan.visible=false;
  button3.hide();
  gameState=2;

} 
function adultsyoga(){
  kids.visible=false;
  button1.hide();
  adults.visible=false;
  button2.hide();
  elders.visible=false;
  slogan.visible=false;
  button3.hide();
  gameState=2;
} 
function eldersyoga(){
  kids.visible=false;
  button1.hide();
  adults.visible=false;
  button2.hide();
  elders.visible=false;
  slogan.visible=false;
  button3.hide();
  gameState=2;
} 