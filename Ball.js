

class Ball extends Box {
    constructor() {
        super();

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.speed = 10;

        
    }

    reset() {
        this.position.x = this.renderer.width / 2 - this.width / 2;
        this.position.y = this.renderer.height / 2 - this.height / 2;

        const angle = Math.random() * Math.PI * 2;

        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
    }

    init() {
        this.reset();
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(keys.c){
            this.reset();
        }

        for(var i = 0; i < this.renderer.renderItems.length; ++i){
            const item = this.renderer.renderItems[i];

            if(item instanceof Player){
                if(this.intersectsBox(item)){
                    this.velocity.x *= -1;
                }
            }
        }

        if(this.position.x + this.width > this.renderer.width){
            //this.velocity.x *= -1;
            this.reset();
            this.renderer.player1.scored();
        }

        if(this.position.x <= 0){
            //this.velocity.x *= -1;
            this.reset();
            this.renderer.player2.scored();
        }

        if(this.position.y + this.height > this.renderer.height){
            this.velocity.y *= -1;
        }

        if(this.position.y <= 0){
            this.velocity.y *= -1;
        }
    }
}