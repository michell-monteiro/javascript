class Person extends GameObject {
    constructor(config) {
        super(config);
        //Movimenta o personagem de acordo com o valor restante (32)
        this.movingProgressRemaining = 32;

        this.direction = "down";

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1]
        }
    }

    update(state) {
        this.updatePosition();
    }

    // Verifica em qual posição o personagem está
    updatePosition() {
        if(this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -= 1;
        }
    }
}