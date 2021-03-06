class Player{
    constructor(){
        this.name=null
        this.index=0
        this.distance=0
        this.rank=0
    }
    getCount(){
        var locationInfo=database.ref("playerCount")
        locationInfo.on("value",function(data){
            playerCount=data.val()

        })
    }
    updateCount(Count){
database.ref("/").update({
    playerCount:Count
})
    }
    getcarsAtEnd(){
    var locationInfo=database.ref("carsAtEnd")
    locationInfo.on("value",function(data){
        this.rank=data.val()
    })
    }
    updatecarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd:rank
        })
    }
    update(){
       var playerIndex="players/player"+this.index
       database.ref(playerIndex).set({
           name:this.name,
           distance:this.distance
       }) 
    }

    getPlayerInfo(){
        var locationInfo=database.ref("players")
        locationInfo.on("value",function(data){
            allPlayers=data.val()
        })
    }
}