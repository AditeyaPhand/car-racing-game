class Game{
    constructor(){

    }
    getGameState(){
        var locationInfo=database.ref("gameState")
        locationInfo.on("value",function(data){
            gameState=data.val()
        })
    }
    updateGameState(state){
database.ref("/").update({
    gameState:state
})
    }
    start(){
       if(gameState===0){
        form = new Form()
            form.display()
         player = new Player()
         player.getCount() 
       }
       car1=createSprite(100,200)
       car2=createSprite(300,200)
       car3=createSprite(500,200)
       car4=createSprite(700,200)
       car1.addImage(car1Image)
       car2.addImage(car2Image)
       car3.addImage(car3Image)
       car4.addImage(car4Image)
       cars=[car1,car2,car3,car4]
    
    }

    play(){
        player.getPlayerInfo()
        player.getcarsAtEnd()
        if(allPlayers!==undefined){
            image(groundImage,0,-4*displayHeight,displayWidth,displayHeight*5)
            
            var x=175
            var y
            var index=0
            for (var plr in allPlayers) {
               index=index+1
               x=x+200
               y=displayHeight-allPlayers[plr].distance
               cars[index-1].x=x
               cars[index-1].y=y
               if(index===player.index){
                cars[index-1].shapeColor="red"
                stroke(10)
                fill("red")
                ellipse(x,y,60,60)
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
               } 
            }
        }
        drawSprites()
        if(keyDown("up")&& player.index!==null){
            player.distance=player.distance+10
            player.update()
        }
        if(player.distance>4000){
            gameState=2
            player.rank+=1
            player.updatecarsAtEnd(player.rank)
        }
    }
    end(){
        console.log("Game Ended")
    }
}