
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg, bgImg
var invisibleGround
var invisibleCelling
var obstacle1, obstacle2, obstacle3, obstacle
var playerImg,player
function preload()
{
	bgImg = loadImage("Forest.jpg")
playerImg = loadImage("flying-superman.png")
	obstacle1 = loadImage("rock.jpg")
obstacle2 = loadImage("tree.jpg")
obstacle3 = loadImage("animal.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	bg = createSprite(200,10,1,1);
	bg.addImage(bgImg);
	bg.scale = 1.3
	invisibleGround = createSprite(600,600,1000,20)
	invisibleGround.visible = false;
	
	invisibleCelling = createSprite(600,10,1000,20)
	invisibleCelling.visible = false;

	engine = Engine.create();
	world = engine.world;
	
	player = createSprite(100,200,20,50);
	player.addImage("player", playerImg);
	player.scale = 0.8;
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown("space")) {
	player.velocityY = -10 ;
	
  }

  
   player.velocityY = player.velocityY + 2;

  player.collide(invisibleGround);
   player.collide(invisibleCelling);
  drawSprites();
 
}



