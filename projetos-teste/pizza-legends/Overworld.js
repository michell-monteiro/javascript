class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            //Desenha o objeto Image, posição x = 0, posição 0
            this.ctx.drawImage(image, 0, 0);
        };
        image.src = "images/maps/DemoLower.png";

        // Desenha o personagem principal na tela
        const x = 0;
        const y = 0;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, // left cut
                0, // Top cut
                32, // width of cut
                32, // height of cut
                x, // Position x to draw
                y, // position y to draw
                32, // Tamanho natural do sprite
                32
                );
        }
        hero.src = "images/characters/people/hero.png"
    }
}