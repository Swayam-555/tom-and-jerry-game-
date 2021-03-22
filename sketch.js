
var tom,tomImg1,tomRunning,tomStopped;
var jerry,jerryImg1,jerryHappy,jerryStopped;
var backGround,backgroundImg;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png");
    tomImg1 = loadImage("cat1.png");
    tomRunning = loadAnimation("cat2.png","cat3.png");
    tomStopped = loadImage("cat4.png");

    jerryImg1 = loadImage("mouse1.png");
    jerryHappy = loadAnimation("mouse2.png","mouse3.png");
    jerryStopped = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    backGround = createSprite(500,400);
    backGround.addImage(backgroundImg);
    backGround.scale = 2;
    //create tom and jerry sprites here
    tom = createSprite(500,400);
    tom.addImage(tomImg1);
    tom.scale = 0.5;

    jerry = createSprite(100,700);
    jerry .addImage(jerryImg1);
    jerry.scale = 0.4;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
     tom.velocityX = 0;
     tom.addAnimation("catStopped",tomStopped);
     tom.changeAnimation("catStopped",tomStopped);
     jerry.addAnimation("mouseStopped",jerryStopped);
     jerry.changeAnimation("mouseStopped",jerryStopped);
    }
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
      if(keyCode === LEFT_ARROW){
          tom.velocityX= -5;
          tom.addAnimation("catRunning",tomRunning);
          tom.changeAnimation("catRunning",tomRunning);
          jerry.addAnimation("mouseHappy",jerryHappy);
          jerry.changeAnimation("mouseHappy",jerryHappy);

      }
  


}
