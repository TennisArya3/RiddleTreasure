var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("Riddle Page.jpeg");
  bg2 = loadImage("Treasure.jpg")
}

function setup() {
  createCanvas(1700,800);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("red");
  text("Score: " + score, 750, 150);

  if(score === 4) {
    clear();
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",550, 420);
  }

  drawSprites()
}