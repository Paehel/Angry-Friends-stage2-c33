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
    box5 = new Box(940,320,70,70);
    box6 = new Box(940,240,70,70);
    box7 = new Box(500,160,70,70);
    box8 = new Box(720,160,70,70);
    box9 = new Box(940,160,70,70);
    box10= new Box(500,80,70,70);
    box11= new Box(940,80,70,70);
    box12= new Box(720,80,70,70);

    fr1 = new Friend1(610, 220);
    fr2 = new Friend2(830, 350);
    fr3 = new Friend3(610, 350);
    fr4 = new Friend4(830, 220);
    fr5 = new Friend5(610, 180);
    fr6 = new Friend6(830, 50);
    fr7 = new Friend7(610, 50);
    fr8 = new Friend8(830, 180);
  
    log1 =  new Log(720,260,20,510, PI/2);
    log2 =  new Log(720,200,20,510, PI/2);
    log3 =  new Log(720,140,20,510, PI/2);
    log4 =  new Log(720,40,20,510, PI/2);
    

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
  
        background(backgroundImg);
    
        noStroke();
        textSize(27)
        fill("white")
        text("Score:" + score, width-150, 50)
    
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
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    fr1.display();
    fr1.score();
    fr2.display();
    fr2.score();
    fr3.display();
    fr3.score();
    fr4.display();
    fr4.score();
    fr5.display();
    fr5.score();
    fr6.display();
    fr6.score();
    fr7.display();
    fr7.score();
    fr8.display();
    fr8.score();

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
