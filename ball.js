class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(50,200,20);
  World.add(world,this.body);
  this.image=loadImage("project.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,150,150);
    }
}