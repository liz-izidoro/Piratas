class CannonBall {
    constructor (x, y)
    {
        this.x = x;
        this.y = y;
        this.radius = 30;

        this.object = Bodies.circle(this.x, this.y, this.radius, {isStatic: true});
        
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.object);
    }

    display()
    {
        var pos = this.object.position;
        push(); 
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();
    }

}