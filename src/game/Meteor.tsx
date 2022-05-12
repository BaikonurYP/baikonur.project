import CanvasObject from './CanvasObject'
import { getRandom } from '../utils/getRandom'

interface IOption {
    position: {
        x: number
        y: number
    }
    scale: number
}

export default class Meteor extends CanvasObject {
    scale: number
    lives: number

    constructor(MeteorImg: string, options: IOption) {
        super(MeteorImg, options.position)
        this.velocity = {
            x: getRandom(3, -3),
            y: getRandom(1, 3),
        }
        this.scale = options.scale
        this.image.onload = () => {
            this.width = this.image.width * this.scale
            this.height = this.image.height * this.scale
        }
    }

    destruction = () => {
        const meteriteQuantity = getRandom(1, 3)
        const meterites: Meteor[] = []

        for (let i = 0; i <= meteriteQuantity; i++) {
            meterites.push(
                new Meteor(this.img, { position: this.position, scale: 0.6 })
            )
        }
        return meterites
    }
}
