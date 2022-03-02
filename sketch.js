	//Global Variables
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
var score = 0;

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}

function draw() {
  background(0);
	
	//Add the ball

	fill(255, 0, 127);
	noStroke();
  ellipse(xBall, yBall, diameter, diameter);
	
	
	//Moving the ball
	xBall += xBallChange;
	yBall += yBallChange;
	
	
	//Collide ball with edge of window
	if (xBall < diameter/2 || 
      xBall > windowWidth - 0.5*diameter) {
  xBallChange *= -1;
}
if (yBall < diameter/2 || 
     yBall > windowHeight - diameter) {
  yBallChange *= -1;
}
	
	//Displaying the paddle	
	if (!started) {
  xPaddle = windowWidth / 2;
  yPaddle = windowHeight - 100;
  started = true;
}
	
	fill(0, 255, 255);
	noStroke();
	rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
	
	
	//Add collision detection with paddle
	if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter/2) >= yPaddle)) {
  xBallChange *= -1;
  yBallChange *= -1;
	
	//Add 1 to score if user hits ball with paddle
	score++;
}
	//Displaying score text
	fill(0, 255, 255);
	textSize(24);
	text("Score: " + score, 10, 25);

  
	
	
}

//Move paddle on event
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}