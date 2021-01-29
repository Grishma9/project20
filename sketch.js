var background,gardenImage,cat,mouse,catImage,mouseImage,catImage2,catImage3;
var catImage4;
function preload() {
 catImage=loadAnimation("images/cat1.png");
 catImage2=loadAnimation("images/cat2.png");
 catImage3=loadAnimation("images/cat3.png");
 catImage4=loadAnimation("images/cat4.png");
 gardenImage=loadImage("images/garden.png");
 mouseImage=loadImage("images/mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(900,1000);
    background = createSprite(400,400);
    background.addImage(gardenImage);
    background.scale=0.7;
    //create tom and jerry sprites here
 cat = createSprite(600,500,20,20);
 cat.addAnimation(catImage);
 cat.scale=0.1;
 mouse = createSprite(200,500,20,20);
 mouse.addImage(mouseImage);
 mouse.scale=0.1;
}

function draw() {
  
  keyPressed();
  mouse.debug=true;
  cat.debug=true; 
  if(cat.x-mouse.x<mouse.width/2+cat.width/2 && 
    mouse.x-cat.x<mouse.width/2+cat.width/2 && 
    cat.y-mouse.y<mouse.width/2+cat.width/2 && 
   mouse.y-cat.y<mouse.width/2+cat.width/2){
    cat.velocityX=0;
    cat.addAnimation("cat2.png",catImage2);
    cat.changeAnimation(catImage2);
  }else { 
    cat.addAnimation(catImage);
    cat.changeAnimation(catImage);
  }
  
    drawSprites();
}


function keyPressed(){
 if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;
   cat.addAnimation("cat2.png",catImage2);
   cat.changeAnimation("cat2.png");
  
 }
  


}
