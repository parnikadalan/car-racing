class Game {
    constructor() {

    }
    getState() {
        db.ref("gameState").on("value", function (data) {
            gameState = data.val()
        })
    }

    updateState(state) {
        db.ref("/").update({
            gameState: state
        })
    }

    async start() {
        if (gameState === 0) {
            player = new Player()
            var playerCountRef = await db.ref("playerCount").once("value")
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val()
                player.getPlayerCount()
            }


            form = new Form()
            form.display()
        }

        car1 = createSprite(100, 200)
        car2 = createSprite(300, 200)
        car3 = createSprite(500, 200)
        car4 = createSprite(700, 200)
        cars = [car1, car2, car3, car4]

        car1.addImage('carImg', car1Img)
        car2.addImage('carImg', car2Img)
        car3.addImage('carImg', car3Img)
        car4.addImage('carImg', car4Img)
    }

    play() {
        form.hide()
        text('GAME START', 100, 100)
        Player.getPlayerInfo()
        player.getCarsAtEnd()

        if (allPlayers !== undefined) {
            background(groundImg)
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
            var index = 0
            var x = 200
            var y = 0

            for (var plr in allPlayers) {
                index = index + 1
                x = x + 300
                y = displayHeight - allPlayers[plr].distance
                cars[index - 1].x = x
                cars[index - 1].y = y

                if (index === player.index) {
                    camera.position.x = displayWidth / 2
                    camera.position.y = cars[index - 1].y
                    textSize(20)
                    fill("red")
                    stroke("red")
                    text(player.name, x-30, y-70 )

                }
                //text(allPlayers[plr].name + " : "+ allPlayers[plr].distance, 100, displayPosition) 
                //displayPosition += 100

            }

            if (player.distance > displayHeight * 5) {
                gameState = 2
                player.rank = player.rank+1
              Player.updateCarsAtEnd(player.rank)
              

            }
            if (keyIsDown(UP_ARROW) && player.index !== null) {
                player.distance += 50
                player.update()


            }
            drawSprites()
            console.log("hello")
        }
    }

    end() {
        clear();
        console.log(player.rank)
        Player.getPlayerInfo()
        console.log(allPlayers["player1"].distance)
        textSize(50)
         text(allPlayers["player1"].name + " : "+ allPlayers["player1"].rank, 100, displayHeight-allPlayers["player1"] .distance)
         text(allPlayers["player2"].name + " : "+ allPlayers["player2"].rank, 100, displayHeight-allPlayers["player1"] .distance+100)
         text(allPlayers["player3"].name + " : "+ allPlayers["player3"].rank, 100, displayHeight-allPlayers["player1"] .distance+200)
         text(allPlayers["player4"].name + " : "+ allPlayers["player4"].rank, 100, displayHeight-allPlayers["player1"] .distance+300)
         



    }
}