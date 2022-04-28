import CanvasObject from './CanvasObject'
import { getRandom } from '../utils/getRandom'

export default class Meteor extends CanvasObject {
    rotation: number

    constructor(ctx: CanvasRenderingContext2D, MeteorImg: string) {
        super(ctx, MeteorImg)
        this.rotation = 0.45
        this.position = {
            x: getRandom(this.width, this.canvas.canvas.width),
            y: -this.width,
        }
        this.velocity = {
            x: getRandom(3, -3),
            y: getRandom(1, 3),
        }
    }

    rotate() {
        const x = this.position.x + this.width / 2
        const y = this.position.y + this.height / 2
        this.canvas.translate(x, y)
        this.canvas.rotate(Math.PI / this.rotation)
        this.canvas.translate(-x, -y)
    }

    draw() {
        this.canvas.save()
        this.rotate()
        super.draw()
        this.canvas.restore()
    }

    update() {
        this.rotation += +0.001
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (
            this.position.x <= 0 ||
            this.position.x >= this.canvas.canvas.width - this.width
        ) {
            this.velocity.x = -this.velocity.x
        }
    }
}
