class Box{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.0,
            friction :1.0,
            density :0.04,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("monster.png");
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,150,150);
      }
}