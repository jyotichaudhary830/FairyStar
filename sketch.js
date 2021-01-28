var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var bg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(1400, 650);

	// fairyVoice.play();

	bg = createSprite(1400,650);
	bg.addImage(bgImg);


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(random(50,600));
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  createEdgeSprites();

if(keyDown(LEFT_ARROW)) {
	  fairy.velocityX = -3;
	  fairy.velocityY = 0;
  }

if(keyDown(RIGHT_ARROW)) {
	fairy.velocityX = 3;
	fairy.velocityY = 0;
}

if(keyDown(DOWN_ARROW)) {
	star.velocityX = 0;
	star.velocityY = 2;
}

if(fairy.isTouching(star)) {
	star.velocityX = 0;
	star.velocityY = 0;

}

  drawSprites();

}