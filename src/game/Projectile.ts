import CanvasObject from './CanvasObject'

interface IData {
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
    position: any
    velocity: any
    radius: number
    c: any

    constructor(canvas: CanvasRenderingContext2D, img: string, data: IData) {
        super(canvas, img)
        this.position = {
            x: data.position.x - this.width / 2,
            y: data.position.y,
        }
        this.velocity = data.velocity
    }
}
