export default class CanvasObject {
    canvas: CanvasRenderingContext2D
    image: HTMLImageElement
    width: number
    height: number
    position: { x: number; y: number }
    velocity: { x: number; y: number }

    constructor(canvas: CanvasRenderingContext2D, img: string) {
        this.canvas = canvas

        const image = new Image()
        image.src = img
        this.image = image
        this.width = image.width
        this.height = image.height
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
