export default class Player {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    width: number
    height: number
    c: any
    image: any

    constructor(canvas: any, shipImg: any) {
        this.c = canvas
        const image = new Image()
        image.src = shipImg

        this.image = image
        this.width = image.width
        this.height = image.height

        this.position = {
            x: canvas.canvas.width / 2 - this.width / 2,
            y: canvas.canvas.height - this.height - 20,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        console.log()
    }

    draw() {
        // this.c.fillStyle = 'red'
        // this.c.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height
        // )
        this.c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
    }
}
