import CanvasObject from './CanvasObject'
import { getRandom } from '../utils/getRandom'

export default class Invader extends CanvasObject {
    constructor(ctx: CanvasRenderingContext2D, shipImg: string) {
        super(ctx, shipImg)
        this.position = {
            x: getRandom(this.width, this.canvas.canvas.width),
            y: -this.width,
        }
        this.velocity = {
            x: 0,
            y: 3,
        }
    }
}
