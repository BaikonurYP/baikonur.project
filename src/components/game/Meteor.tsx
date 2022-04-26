import { getRandom } from '../../utils/getRandom'

export default class Meteor {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    width: number
    height: number
    c: any
    image: any
    rotation: number

    constructor(canvas: any, MeteorImg: any) {
        this.c = canvas
        const image = new Image()
        image.src = MeteorImg

        this.image = image
        this.width = image.width
        this.height = image.height
        this.rotation = 0.45

        this.position = {
            x: getRandom(this.width, this.c.canvas.width),
            y: -this.width,
        }
        this.velocity = {
            x: getRandom(3, -3),
            y: getRandom(1, 3),
        }
    }

    draw() {
        this.c.save()

        const x = this.position.x + this.width / 2
        const y = this.position.y + this.height / 2
        this.c.translate(x, y)
        this.c.rotate(Math.PI / this.rotation)
        this.c.translate(-x, -y)

        this.c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
        this.c.restore()
    }

    update() {
        this.rotation += +0.001
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (
            this.position.x <= 0 ||
            this.position.x >= this.c.canvas.width - this.width
        ) {
            this.velocity.x = -this.velocity.x
        }
    }
}
