class Player {
    constructor(){} 
    getCount() {
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", function (){
            
            gameState = data.val()

        })
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount:count
        })

    }
    update(name) {
        var playerIndex = "player"+ playerCount;
        database.ref(playerIndex).update({
            name:name
        })

    }

    
}