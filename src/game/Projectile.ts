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

export default class Projectile {
    position: any
    velocity: any
    radius: number
    c: any

    constructor(canvas: any, data: IData) {
        this.c = canvas
        this.position = data.position
        this.velocity = data.velocity
        this.radius = 3
    }

    draw() {
        this.c.beginPath()
        this.c.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            Math.PI * 2
        )
        this.c.fillStyle = 'red'
        this.c.fill()
        this.c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}
