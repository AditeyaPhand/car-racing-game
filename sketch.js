var game;
var gameState=0
var playerCount
var database;
var position;
var allPlayers;
var distance=0
var car1,car2,car3,car4;
var form
var player
var cars
var car1Image,car2Image,car3Image,car4Image
var groundImage


function setup(){
    createCanvas(displayWidth*2,displayHeight*3);
    database=firebase.database()
    game=new Game()
    game.getGameState()
   game.start()
}

function preload(){
   car1Image=loadImage("images/car1.png")
    car2Image=loadImage("images/car2.png")
    car3Image=loadImage("images/car3.png")
    car4Image=loadImage("images/car4.png") 
    groundImage=loadImage("images/track.jpg")
}

function draw(){
    background("white");
    if(playerCount===4){
        game.updateGameState(1)

    }
    if(gameState===1){
        game.play()

    }
    if(gameState===3){
        game.end()
    }
    
}


