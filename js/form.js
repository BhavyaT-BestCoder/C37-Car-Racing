class Form {
    constructor(){}
    display() {
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("Enter Name Here");
        var button = createButton("play");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement("h3");
            greeting.html("Hello!"+name);
            player.position(130,160);

        })

        
    }

}