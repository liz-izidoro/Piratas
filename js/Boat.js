class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat"
    }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.isBroken = false;
    this.animation = boatAnimation;
    this.speed = 0.05;
    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }

  animate()
  {
    this.speed += 0.05;
  }
  // && (AND/e) e || (OR/ou)
  remove(index)
  {
    this.animation = brokenBoatAnimation;
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    this.isBroken = true;

  //Body.setVelocity(this.body, {x:0, y:0});

    setTimeout(() => {
      World.remove(world, boats[index].body);
      delete boats[index];
    }, 3000);
  }
}
