var monsterimg;

var trap1img,trap2img,trap3img,trap4img,trap5img;

var boost1img,boost2img,boost3img;

var bg1img,bg2img;

var zombie,zombie_attack,zombie_running,zombie_idle;
function preload()
{
    bg1img = loadImage("images/bg1.png");
    bg2img = loadImage("images/bg2.png");

    zombie_running=loadAnimation("images/Walk (1).png","images/Walk (2).png","images/Walk (3).png","images/Walk (4).png","images/Walk (5).png","images/Walk (6).png","images/Walk (7).png","images/Walk (8).png","images/Walk (9).png","images/Walk (10).png");
    zombie_attack=loadAnimation("images/Attack (2).png","images/Attack (3).png","images/Attack (4).png","images/Attack (5).png","images/Attack (6).png","images/Attack (7).png","images/Attack (8).png");
    zombie_idle=loadImage("images/Stand.png");
    trap1img = loadImage("images/trap1.png");
    trap2img = loadImage("images/trap2.png");
    trap3img = loadImage("images/trap3.png");
    trap4img = loadImage("images/trap4.png");
    trap5img = loadImage("images/trap5.png");

    monsterimg = loadImage("images/enemy.png");

    boost1img = loadImage("images/boost1.png");
    boost2img = loadImage("images/boost2.png");
    boost3img = loadImage("images/boost3.png");



}

function setup() {
  createCanvas(1600,800);

  zombie=createSprite(50,410,600,10);
  zombie.addAnimation("zombie_running",zombie_running);
  zombie.addAnimation("zombie_attack",zombie_attack);
  zombie.addImage("zombie_idle",zombie_idle);
  zombie.scale=0.2;
  
  obstaclesGroup = new Group();
}

function draw() {
  background(bg1img);  
  
  if(keyDown("space")) {
  zombie.velocityY = -13;
}
  
  
  
  spawnObstacles();
  drawSprites();

}





function spawnObstacles() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(1700,905,60,40);
    obstacle.y = Math.round(random(100,700));
    obstacle.velocityX = -3;
    
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: obstacle.addImage(trap1img);
      obstacle.scale = 0.08;
              break;
      case 2: obstacle.addImage(trap2img);
      obstacle.scale = 0.2;
              break;
      case 3: obstacle.addImage(trap3img);
      obstacle.scale = 0.3;
              break;
      case 4: obstacle.addImage(trap4img);
      obstacle.scale = 0.09;
              break;
      case 5: obstacle.addImage(trap5img);
      obstacle.scale = 0.5;
              break;
      
      default: break;
}
    
     obstacle.lifetime = 1000;
     obstaclesGroup.add(obstacle);

}
}
