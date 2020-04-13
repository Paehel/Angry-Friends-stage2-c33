const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
     backgroundImg = loadImage("sprites/playground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(500,320,70,70);
    box2 = new Box(720,320,70,70);
    box3 = new Box(500,240,70,70);
    box4 = new Box(720,240,70,70);
    box5 = new Box(610,160,70,70);
    box6 = new Box(940,320,70,70);
    box7 = new Box(940,240,70,70);

    pig1 = new Pig(610, 350);
    pig2 = new San(610, 220);
    pig3 = new Pra(830,350);
    pig4 = new Khu(830,220);
    
    log1 = new Log(720,260,20,510, PI/2);
    log2 =  new Log(720,180,20,510, PI/2);
    log3 = new Log(560,120,20,150, PI/7);
    log4 = new Log(670,120,20,150, -PI/7);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
  
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig3.display();
    pig3.score();
    pig4.display();
    pig4.score();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
   
    
    bird.display();

    platform.display();
   
    slingshot.display();    
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

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x:200,  y:50}  );
       slingshot.attach(bird.body);
       bird.trajectory = [];
       gameState = "onSling";
    }
}
