class Helicop{
    constructor(){
        var options={
            
            restitution:0.2,
            friction:0.1,
                density:1
        }
       
        this.body=Bodies.rectangle(100,100,10,10,options)
       
        World.add(world,this.body)
        this.helicop=createSprite(100,100,10,10)
        this.helicop.scale=0.5
        this.helicop.addAnimation("helicopter",helicopterImage)
        this.helicop.addAnimation("fire",fireImage)
    
    }
    display(){
         var pos=this.body.position
         this.helicop.x=pos.x
         this.helicop.y=pos.y
    }
}