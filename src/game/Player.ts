import CanvasObject from './CanvasObject'

export default class Player extends CanvasObject {
    constructor(ctx: CanvasRenderingContext2D, img: string) {
        super(ctx, img)
        this.position = {
            x: ctx.canvas.width / 2 - this.width / 2,
            y: ctx.canvas.height - this.height - 20,
        }
    }
}
