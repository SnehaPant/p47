class Obstacle{
    constructor(x,y,width,height){
      this.obs=createSprite(x,y,width,height)
      this.obs.velocityX=-8
      this.obs.velocityY=0
      this.obs.shapeColor="black"
     
 
    }
}