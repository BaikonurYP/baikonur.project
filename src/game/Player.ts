import CanvasObject from './CanvasObject'

export default class Player extends CanvasObject {
    constructor(
        ctx: CanvasRenderingContext2D,
        img: string,
        options: { width: number; height: number }
    ) {
        super(ctx, img)
        this.position = {
            x: options.width / 2 - this.width / 2,
            y: options.height - this.height - 20,
        }
    }
}
