

class Box extends RenderItem {
    constructor() {
        super();

        this.width = 10;
        this.height = 10;

        this.color = "green";
    }

    intersectsBox(box) {
        if (this.position.x + this.width < box.position.x) return false; // a is left of b
        if (this.position.x > box.position.x + box.width) return false; // a is right of b
        if (this.position.y + this.height < box.position.y) return false; // a is above b
        if (this.position.y > box.position.y + box.height) return false; // a is below b
        return true; // boxes overlap
    }

    update() {
    }

    render(ctx) {
        if(ctx.fillStyle != this.color){
            ctx.fillStyle = this.color;
        }
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}