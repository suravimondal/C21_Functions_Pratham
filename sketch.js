    var fixedRect, movingRect;
    var car, wall;

    function setup() {
      createCanvas(1200,800);
      fixedRect = createSprite(600, 400, 50, 80);
      fixedRect.shapeColor = "green";
      fixedRect.debug = true;
      movingRect = createSprite(400,200,80,30);
      movingRect.shapeColor = "green";
      movingRect.debug = true;

      wall= createSprite(1000,100,30,100);
      wall.shapeColor="brown";

      car=createSprite(400,100,40,40);
      car.shapeColor="purple";
      car.velocityX=3;
    }

    function draw() {
      background(0,0,0);  
     // movingRect.x = World.mouseX;
     // movingRect.y = World.mouseY;

    if(is_Touching(car,wall)){
      car.shapeColor="yellow";
      textSize(25);
      fill("white");
      text("TOUCHED!!",200,200);
    }
    bounceOff(car,wall);
      collide(car,wall);
      drawSprites();
    }
    