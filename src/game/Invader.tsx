import CanvasObject from './CanvasObject'

interface IOption {
    position: {
        x: number
        y: number
    }
    scale: number
    lives: number
}

export default class Invader extends CanvasObject {
    projectileQuantity: number
    scale: number
    constructor(shipImg: string, options: IOption) {
        super(shipImg, options.position)
        this.scale = options.scale
        this.lives = options.lives
        this.image.onload = () => {
            this.width = this.image.width * this.scale
            this.height = this.image.height * this.scale
        }
        this.velocity = {
            x: 0,
            y: 3,
        }
    }
}
