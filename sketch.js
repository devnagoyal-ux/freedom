const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var x =150;
var x2 = 5;
var obstacle;
var bridge;
var bridge2;

function setup(){
    var canvas = createCanvas(2500,400);
    engine = Engine.create();
    world = engine.world;    
}

function draw(){
    background(220);
        Engine.update(engine);
        if(keyIsDown(RIGHT_ARROW)){
            x = x +5;
            x2  = x2 - (-1);
            }
  fill(51) ;         
obstacle = rect(400,0,20,400);
obstacle2 = rect(1200,0,20,400);

bridge = rect(1800,120,500,20);
bridge2 = rect(1800,300,500,20);

text("Yeah !  My Freedom",2350,200);
text("just One Obstacle More",1500,100);

fill(255, 204, 0);
box1= rect(x,200,30,30);

 
if(x >420){
    for(var i = 410; i < 415;i++){
       fill('red');
         var x3 = random(420,x);
         var blood = rect(x3,220,2,2);
     }
     
    } 

    if(x >1200){
        for(var i = 410; i < 430;i++){
           fill('red');
             var x3 = random(1200,x);
             var blood = rect(x3,220,2,2);
         }
         
        } 
        if(x>2000){
            clear();
            background('red');
            stroke(255, 204, 0);
            textSize(40);
            text("alas,the shooter has shooted ",1500,200);
        }      
   
}

