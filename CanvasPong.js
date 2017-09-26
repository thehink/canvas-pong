

class CanvasPong {
    constructor() {
        this.element = document.createElement('canvas');
        this.context = this.element.getContext('2d');

        document.body.appendChild(this.element);

        this.render = this.render.bind(this);

        //array containing items that will be rendered on screen
        this.renderItems = [];

        //init objects
        this.ball = new Ball();
        this.player1 = new Player(true);
        this.player2 = new Player();
        this.score = new Score();

        //resize canvas
        this.resize();

        //add render objects to render loop
        this.add(this.score);
        this.add(this.ball);
        this.add(this.player1);
        this.add(this.player2);

        window.addEventListener('resize', this.resize.bind(this));
        
        //start render loop
        this.render();
    }

    add(item) {
        item.renderer = this;

        item.init();

        this.renderItems.push(item);

        return item;
    }

    resize() {
        this.width = this.element.width = window.innerWidth - 1;
        this.height = this.element.height = window.innerHeight - 1;

        for(var i = 0; i < this.renderItems.length; ++i){
            this.renderItems[i].resize();
        }
    }

    render() {
        this.context.fillStyle = "#ffffff";
        this.context.fillRect(0, 0, this.width, this.height);

        for(var i = 0; i < this.renderItems.length; ++i){
            this.renderItems[i]._render(this.context);
        }

        window.requestAnimationFrame(this.render);
    }
}