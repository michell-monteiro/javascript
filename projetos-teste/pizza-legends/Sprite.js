class Sprite {
    constructor(config) {

        //Selecionar a imagem
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // Configura a animação e o estado inicial
        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
        }
        // Determina qual frame será utilizado. Por padrão será 'idleDown'
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // Referência do game Object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isLoaded && ctx.drawImage(this.Image,
            0,0,
            32,32,
            x,y,
            32,32
        )
    }
}