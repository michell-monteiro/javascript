class OverworldMap {
    constructor(config) {
        // Configura as camadas (layers) do mapa. Se um objeto deve estar acima ou abaixo de algo
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }
}

//A configuração de todos os mapas
window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "images/maps/DemoLower.png",
        upperSrc: "images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                // Faz com que apenas o player se mova por comando
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            npc1: new Person ({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "images/maps/KitchenLower.png",
        upperSrc: "images/maps/KitchenUpper.png",
        gameObjects: {
            npc3: new GameObject({
                x: 3,
                y: 1,
                src: "images/characters/people/npc3.png"
            }),
            npc5: new GameObject ({
                x: 9,
                y: 2,
                src: "images/characters/people/npc5.png"
            })
        }
    },
}