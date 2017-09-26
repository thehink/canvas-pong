

class Score extends RenderItem {

    render(ctx) {
        const {
            player1,
            player2,
        } = this.renderer;

        ctx.font = '48px serif';
        ctx.fillStyle = 'black';
        ctx.fillText(`Score ${player1.score}`, 20, 50);

        ctx.fillText(`Score ${player2.score}`, this.renderer.width - 200, 50);
    }
    
}