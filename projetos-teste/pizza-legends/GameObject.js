class GameObject {
    constructor(config) {
        // determina a posição de spawn do objeto
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = null;
    }
}