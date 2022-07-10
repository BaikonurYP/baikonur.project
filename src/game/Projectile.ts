import CanvasObject from './CanvasObject'

interface IOptions {
    position: {
        x: number
        y: number
    }
    velocity: {
        x: number
        y: number
    }
}

export default class Projectile extends CanvasObject {
    constructor(img: string, options: IOptions) {
        super(img, options.position)
        this.position.x = options.position.x - this.width / 2
        this.velocity = {
            x: options.velocity.x,
            y: options.velocity.y
        }
        this.image.onload = () => {
            this.width = this.image.width
            this.height = this.image.height * 0.8
        }
    }
}
