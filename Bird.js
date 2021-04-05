class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.Trajectory=[]
    this.body.position.x
    this.body.position.y
    
  }

  display() {
    super.display();
   console.log(this.body.position.x)
   console.log(this.body.velocity.x)
   //
   if(this.body.velocity.x>1 && this.body.position.x > 200){
    var position=[this.body.position.x,this.body.position.y]
    this.Trajectory.push(position)

   }
   //
   //
   
    for(var i=0; i<this.Trajectory.length; i++){
      image(this.smokeImage, this.Trajectory[i][0], this.Trajectory[i][1]);

    }
  }
}
