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
        this.velocity = {
            x: options.velocity.x,
            y: options.velocity.y,
        }
    }
}
