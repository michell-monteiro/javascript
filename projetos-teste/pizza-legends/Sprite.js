class Sprite {
    constructor(config) {

        //Selecionar a imagem
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Sombra
        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || false
        if(this.useShadow){
            this.shadow.src = "images/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

        // Configura a animação e o estado inicial
        this.animations = config.animations || {
            //determina as posições do sprite sheet
            "idle-down": [[0, 0]],
            "idle-right": [0, 1],
            "idle-up": [0, 2],
            "idle-left": [0, 3],
            "walk-down": [[1,0], [0,0], [3,0], [0,0]],
            "walk-right": [[1,1], [0,1], [3,1], [0,1]],
            "walk-up": [[1,2], [0,2], [3,2], [0,2]],
            "walk-left": [[1,3], [0,3], [3,3], [0,3]]
        }
        // Determina qual frame será utilizado. Por padrão será 'idleDown'
        this.currentAnimation = "walk-down"; //config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        //Determina quantos frames a animação vai ter. >16 = slow / <16 = fast
        this.animationFrameLimit = config.animationFrameLimit || 16;
        this.animationFrameProgress = this.animationFrameLimit;

        // Referência do game Object
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    updateAnimationProgress() {
        //Downtick frame progress
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        // Reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        // Quando o valor do index do spritesheet não existir, retornará a primeira posição (0)
        if(this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx) {
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX * 32, frameY * 32,
            32,32,
            x,y,
            32,32
        )

        this.updateAnimationProgress();
    }
}