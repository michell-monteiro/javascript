class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    startGameLoop() {
        // Executa a função constantemente
        const step = () => {
            // console.log("stepping"); Mostra no console que a função está funcionando
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {

        this.startGameLoop();

        const image = new Image();
        image.onload = () => {
            //Desenha o objeto Image, posição x = 0, posição 0
            this.ctx.drawImage(image, 0, 0);
        };
        image.src = "images/maps/DemoLower.png";

        //Coloca game objects
        const hero = new GameObject ({
            x: 5,
            y: 6,
        })
        const npc1 = new GameObject ({
            x: 7,
            y: 9,
            src: "images/characters/people/npc1.png"
        })

        setTimeout(() => {
        hero.sprite.draw(this.ctx);
        npc1.sprite.draw(this.ctx);
        }, 200)

    }
}