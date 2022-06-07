// módulo motor de física
const Engine = Matter.Engine;
// módulo mundo
const World = Matter.World;
// módulo corpos/objetos
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, tower, towerImg;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  // cria motor de fisica
  engine = Engine.create();
  // crio um mundo dentro do motor de fisica
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
  
  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  
 
}

function draw() {
  image(backgroundImg, 0, 0, 1200, 600);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width *2, 1);

  push(); // captura uma nova configuração
  rectMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);
  pop(); // reverte (recupera) a configuração anterior
  
}
