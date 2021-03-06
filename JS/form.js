class Form{
    constructor(){ 
         this.input=createInput("name")
         this.button=createButton("Submit")
         this.greeting=createElement("h2")
         this.reset=createButton("Reset")
    }
    display(){
     var title=createElement("h2")
     title.html("Car Race Game")
     title.position(130,0)
     this.input.position(130,150)
    this.button.position(200,200)
    this.reset.position(20,20)
    this.reset.mousePressed(
        ()=>{
            game.updateGameState(0)
            player.updateCount(0)

        }
    )
    this.button.mousePressed(
        ()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello"+player.name)
            this.greeting.position(130,100)

        }
    )
    }
}