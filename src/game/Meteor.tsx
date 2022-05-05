import CanvasObject from './CanvasObject'
import { getRandom } from '../utils/getRandom'
import { number } from 'yup'

interface IPosition {
    x: number
    y: number
}

export default class Meteor extends CanvasObject {
    scale: number
    position: { x: number; y: number } = {
        x: getRandom(this.width, this.canvas.canvas.width),
        y: -this.width,
    }

    constructor(
        ctx: CanvasRenderingContext2D,
        MeteorImg: string,
        position?: IPosition,
        scale: number = 1
    ) {
        super(ctx, MeteorImg)
        this.velocity = {
            x: getRandom(3, -3),
            y: getRandom(1, 3),
        }
        this.scale = scale
        this.width = this.image.width * this.scale
        this.height = this.image.height * this.scale
        if (position) {
            this.position = {
                x: position.x,
                y: position.y,
            }
        }
    }

    destruction = () => {
        const meteriteQuantity = getRandom(1, 3)
        const meterites: Meteor[] = []

        for (let i = 0; i <= meteriteQuantity; i++) {
            meterites.push(
                new Meteor(this.canvas, this.img, this.position, 0.4)
            )
        }
        return meterites
    }
}
