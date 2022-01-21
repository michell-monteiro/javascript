class Sprite {
    constructor(config) {

        // Configura a animação e o estado inicial
        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
        }
        // Determina qual frame será utilizado. Por padrão será 'idleDown'
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;
    }
}