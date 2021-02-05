const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var back
var helicopterImage
var heli
var monster=[]
var obs=[]
var power=[]
var x=800
var bg
var score=0
var obsGroup
var monsterGroup
var gameState="play"

function preload(){
back=loadImage("background2.png")
helicopterImage=loadAnimation("helicop1.png","helicop2.png","helicop3.png","helicop4.png")
fireImage=loadAnimation("fire1.png","fire2.png","fire4.png","fire5.png","fire6.png")
explosion=loadSound("explosion.wav")
helicopSound=loadSound("helicopter.wav")
}



function setup() {
  createCanvas(1530,500);
bg=createSprite(width/2,height/2)
bg.addImage(back)
bg.velocityX=-5
bg.scale=2.5
  engine = Engine.create();
  world = engine.world;
heli=new Helicop()
var options={
  isStatic:true
  
}
helicopSound.loop()
ground=Matter.Bodies.rectangle(width/2,height,width,20,options)
World.add(world,ground)
obsGroup=createGroup()
monsterGroup=createGroup()
}

function draw() {
  background(0);  
  Engine.update(engine); 
  
  drawSprites();
  textSize(32)
  fill("black")
  strokeWeight(5)
  
  text("SCORE :" +score,width-200,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,20) 
 
 if(gameState=='play'){
   play()
 }
if(gameState=='end'){
  end()
}
}

function mouseDragged(){
  Matter.Body.setPosition(heli.body,{x:100,y:mouseY})
}
function play(){
  score=score+Math.round(getFrameRate()/60)
  if(frameCount%200==0){
    x+=300
    monster.push(new Monster(x,Math.round(random(100,450)),50))
  }
 
  if(frameCount%60==0){
    x+=300
    obs.push(new Obstacle(x,Math.round(random(100,450)),Math.round(random(50,90)),Math.round(random(100,150))))
  }
  if(frameCount%200==0){
    x+=300
    power.push(new Power(x,Math.round(random(100,450)),50))
  }
  if(bg.x<0){
    bg.x=width/2
  }
  for(var i=0;i<obs.length;i++){
    obsGroup.add(obs[i].obs)
  }
  for(var i=0;i<monster.length;i++){
    monsterGroup.add(monster[i].monster)
  }
  if(heli.helicop.isTouching(obsGroup)){
       heli.helicop.changeAnimation("fire",fireImage)
       gameState='end'
       obsGroup.setVelocityXEach(0)
      bg.velocityX=0
      explosion.play()
  }
  if(heli.helicop.isTouching(monsterGroup)){
    heli.helicop.changeAnimation("fire",fireImage)
    gameState='end'
    obsGroup.setVelocityXEach(0)
   bg.velocityX=0
   explosion.play()
   monsterGroup.setVelocityXEach(0)
}

  heli.display()
}
function end(){
  text("GAMEOVER",width/2,height/2)
 
}