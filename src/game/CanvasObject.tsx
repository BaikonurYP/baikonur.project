export default class CanvasObject {
    canvas: CanvasRenderingContext2D
    image: HTMLImageElement
    width: number
    height: number
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    img: string

    constructor(canvas: CanvasRenderingContext2D, img: string) {
        this.canvas = canvas
        this.img = img
        this.image = new Image()
        this.image.src = img
        this.width = this.image.width
        this.height = this.image.height
        this.position = {
            x: 0,
            y: 0,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    draw() {
        this.canvas.drawImage(
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
        this.position.y += this.velocity.y
    }
}
