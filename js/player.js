class Player {
    constructor() {
        this.distance = 0;
        this.index = null;
        this.name = null;
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
            distance: this.distance
        })
    }

    static getPlayerInfo() {
        db.ref("players").on("value", (data) => {
            allPlayers = data.val()

        })


    }
}

