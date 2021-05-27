class Form{
    constructor(){
        //DOM : document object model 
        this.input = createInput("name")
        this.button = createButton("join")
        this.greeting = createElement("h3")
        this.reset = createButton("reset")
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h1")
        title.html("car racing game")
        title.position(displayWidth/2-150, 50)
        
        this.input.position(displayWidth/2-150, displayHeight/3)

        this.reset.position(150, 180)
        this.reset.mousePressed(()=>{
            db.ref('/').set({
                playerCount : 0,
                gameState : 0,
                carsAtEnd : 0
            })
            location.reload()
        })
        
        this.button.position(displayWidth/2-150,displayHeight/3+100)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.update()
            player.updatePlayerCount(playerCount)
            
            this.greeting.html("hello "+ player.name)
            this.greeting.position(displayWidth/2-150, displayHeight/3)



        })

    }
}