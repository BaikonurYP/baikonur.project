import CanvasObject from './CanvasObject'
import { getRandom } from '../utils/getRandom'

export default class Invader extends CanvasObject {
    constructor(
        ctx: CanvasRenderingContext2D,
        shipImg: string,
        options: { width: number; height: number }
    ) {
        super(ctx, shipImg)
        this.position = {
            x: getRandom(this.width, options.width),
            y: -this.height,
        }
        this.velocity = {
            x: 0,
            y: 3,
        }
    }
}
