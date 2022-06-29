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
    rotation: number = 0.45

    constructor(MeteorImg: string, options: IOption) {
        super(MeteorImg, options.position)
        this.velocity = {
            x: getRandom(3, -3),
            y: getRandom(1, 3),
        }
        this.lives = 1
        this.scale = options.scale
        this.image.onload = () => {
            this.width = this.image.width * this.scale
            this.height = this.image.height * this.scale
        }
    }

    destruction = () => {
        const meteoriteQuantity = getRandom(1, 3)
        const meteorites: Meteor[] = []

        for (let i = 0; i <= meteoriteQuantity; i++) {
            meteorites.push(
                new Meteor(this.img, { position: this.position, scale: 0.6 })
            )
        }
        return meteorites
    }
}
