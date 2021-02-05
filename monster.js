class Monster{
    constructor(x,y,r){
     
      this.sprite=createSprite(x,y,r,r)
      this.sprite.velocityX=-8
      this.sprite.velocityY=0
        var rand=Math.round(random(1,4))
        console.log(rand)
        switch(rand){
            case 1:
                this.image=loadImage("monster1.png")
                break
                case 2:
                    this.image=loadImage("monster2.png")
                    break
                    case 3:
                        this.image=loadImage("monster3.png")
                        break
                        case 4:
                            this.image=loadImage("monster4.png")
                            break
        }
       this.sprite.addImage("monster",this.image)
       
      
    }
}