class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        // Executa a função constantemente
        const step = () => {
            // console.log("stepping"); Mostra no console que a função está funcionando

            //Desenha a camada mais baixa (Lower layer)
            this.map.drawLowerImage(this.ctx);

            // Desenha os Game objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx);
            })

            //Desenha a camada mais alta (Upper layer)
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        // Para alterar o mapa, basta trocar o último parâmetro atribuido em this.map (tente substituir DemoRoom por outro nome definido em OverworldMap)
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        this.startGameLoop();

    }
}