
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var bg, background2, backgroun3, backgroun4, background5;
var answer1, answer2, answer3, answer4, answer5;
var button1;
var score=0;


function preload()
{
	bg =loadImage("background.png");
	background2 =loadImage("background2.jpg");
	background3 =loadImage("background3.jpg");
	background4 =loadImage("background4.jpg");
	background5 =loadImage("background5.jpg");

	answer1 =loadImage("yourname.jpg");
	answer2 =loadImage("yourage.jpg");
	answer3 =loadImage("atowel.jpg");
	answer4 =loadImage("abank.jpg");
	answer5 =loadImage("piano.jpg");

	
}

function setup() {
	createCanvas(2000 , 700);
 var check=createSprite(560,350);
 //check.invisible=true;

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


//	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER)
 	background(bg);
	 fill("white");
    textSize(30);
	text("What belongs to you but is used more by others ?",530,250);
	//button1 = createButton('check');
	//button1.position(560,350);

	//button1.mousePressed(()=>{
		if(mousePressed(check)){

		
		background(answer1);
			
			score++;
			gameState=1;
		}

//	});

  drawSprites();
 
}



