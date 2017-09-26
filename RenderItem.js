

class RenderItem {

    constructor() {
        this.position = {
            x: 0,
            y: 0,
        }

        this.renderer = null;
    }

    init() {}

    resize() {}

    update() {}

    render() {}

    _render(ctx) {
        this.update();
        this.render(ctx);
    }
}