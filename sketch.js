var car = createSprtie (50,50,200,50);
var wall = createSprite (1500,200,60,height/2);
var spead,weight; 

function setup (){
 createCanvas (1600,40);

 speed = random (55,90);
 weight = rando (400,1500);
    }

function draw () {

car.velocityX = speed;
deformation = 0.5*weight*speed*speed/22500

    if (wall.x-car.x <(car.width + wall.width)/2)
    {
     car.velocityX = 0;
        var deformation = 0.5*weight*speed*speed/22509;
            
        if (deformation > 180)
        {
            car.shapeColor = color (255,0,0);
        }
        if (deformation < 180 && deformation > 100)
        {
            car.shapeColor = color (230,230,0);
        }

        if (deformation < 100)
        {
            car.shapeColor = color(0,255,0);
        }
    }
}