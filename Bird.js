class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png"); 
    this.Him = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //to stop mess made by smoke image
    if(this.body.position.x>200&&this.body.velocity.x>10){
    var position = [this.body.position.x,this.body.position.y];
    //console.log(position);
    this.Him.push(position);
    }
    //console.log(this.Him);
    //for loop to create smoke trail after bird is launched
    for(var i=0;i<this.Him.length;i++){
      image(this.smokeImage,this.Him[i][0],this.Him[i][1]);
    
      
    }
  }
}
