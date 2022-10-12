var piso,piso_moviendose;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
piso = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite (100,170);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5
 piso_moviendose = createSprite(600,190);
 piso_moviendose.addImage(piso);
 piso_moviendose.velocityX = -6;
 sueloquesemueve = createSprite(300,195,600,5);
 sueloquesemueve.visible = false;
}

function draw(){
  background("white");
  if (keyDown ("space")&& trex.y >= 100){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +0.8;
  if (piso_moviendose.x <0){
    piso_moviendose.x = piso_moviendose.width/2;
  }
  trex.collide(sueloquesemueve); 
  drawSprites();

}
