class Power{
    constructor(x,y,r){
     
      this.pow=createSprite(x,y,r,r)
      this.pow.velocityX=-8
      this.pow.velocityY=0
        var rand=Math.round(random(1,2))
        console.log(rand)
        switch(rand){
            case 1:
                this.image=loadImage("power.png")
                break
                case 2:
                    this.image=loadImage("power (2).png")
                    break
                    
        }

       this.pow.addImage("POWER",this.image)
       this.pow.scale=0.5
      
    }
}