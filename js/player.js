class Player {
    constructor() {
        this.distance = 0;
        this.index = null;
        this.name = null;
        this.rank = 0;
    }

    getPlayerCount() {
        db.ref("playerCount").on("value", function (data) {
            playerCount = data.val()
        })
    }

    updatePlayerCount(count) {
        db.ref("/").update({
            playerCount: count
        })
    }

    update() {
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).set({
            name: this.name,
            distance: this.distance, rank: this.rank
        })
    }

    static getPlayerInfo() {
        db.ref("players").on("value", (data) => {
            allPlayers = data.val()

        })


    }

    getCarsAtEnd() {
        db.ref("carsAtEnd").on("value", (data) =>{
            this.rank = data.val()
        })

        
    }

    static updateCarsAtEnd(rank){
        db.ref("/").update({
            carsAtEnd: rank
        })
    }
}

