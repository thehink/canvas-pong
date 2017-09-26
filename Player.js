

class Player extends Box {
    constructor(left) {
        super();

        this.left = left;

        this.width = 10;
        this.height = 100;

        this.velocity = 10;

        this.score = 0;
    }

    scored() {
        this.score++;
    }

    init() {
        if(this.left){
            this.position.x = 0;
        }else {
            this.position.x = this.renderer.width - this.width;
        }
    }

    resize() {
        this.init();
    }

    update() {
        if(this.left){
            if(keys.a){
                this.position.y -= this.velocity;
            }
    
            if(keys.z){
                this.position.y += this.velocity;
            }
        }else {
            if(keys.arrowup){
                this.position.y -= this.velocity;
            }
    
            if(keys.arrowdown){
                this.position.y += this.velocity;
            }
        }


        if(this.position.y <= 0){
            this.position.y = 0;
        }

        if(this.position.y + this.height >= this.renderer.height){
            this.position.y = this.renderer.height - this.height;
        }
    }
}