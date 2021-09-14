var garden,rabbit,apple,orange, red,leaf;
var gardenImg,rabbitImg,leafImg,orangeImg,redImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
   edges= createEdgeSprites();
   rabbit.collide(edges);
    rabbit.x=World.mouseX
   console.log(rabbit.X);
   var select_sprites = Math.round(random(1,4));
   if(frameCount % 80 === 0){
     if(select_sprites ==1){
       createApples();
     }else if (select_sprites ==2){
        createOrange();
     }else 
        createRed();

   }
  
  function createApples(){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 3;
    apple.scale = 0.08;
    apple.lifetime = 90;
  }
   
  function createOrange(){
    orange = createSprite(random(50,350),40,10,10);
    orange.addImage(orangeImg);
    orange.velocityY = 3;
    orange.scale = 0.10;
    orange.lifetime = 90;
  }

function createRed(){
  red = createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.velocityY = 3;
  red.scale= 0.08;
  red.lifetime = 90;
  
}

function createLeaf(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocity =3;
  leaf.scale = 0.08;
  leaf.lifetime = 90;
}



 

  drawSprites();
}





