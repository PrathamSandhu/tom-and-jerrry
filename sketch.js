
function preload() {
    //load the images here
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat4Img = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600,100,100);
    tom.addAnimation("tomSleeping",cat1Img);
    tom.scale = 0.2;

    jerry = createSprite(200,600,100,100);
    jerry.addAnimation("jerryStanding",mouse1Img);
    jerry.scale = 0.2;

    tom.debug = true;
    jerry.debug = true;

    tom.setCollider("circle",0,0,400);
    jerry.setCollider("circle",0,0,400);
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    

    if(tom.x - jerry.x <= tom.width/4 + jerry.width/4
        && jerry.x - tom.x <= tom.width/4 + jerry.width/4 ){
           tom.velocityX = 0;
           tom.addAnimation("tomLastImage",cat4Img);
           tom.changeAnimation("tomLastImage");
           jerry.addAnimation("jerryLastImage",mouse2Img);
           jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -2;
    tom.addAnimation("tomRunning",cat2Img);
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryTeasing",mouse4Img);
    jerry.changeAnimation("jerryTeasing");
}
  //For moving and changing animation write code here


}
