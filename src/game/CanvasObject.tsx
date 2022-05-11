export default class CanvasObject {
    image: HTMLImageElement
    width: number
    height: number
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    img: string
    lives: number

    constructor(img: string, position: { x: number; y: number }) {
        this.img = img
        this.image = new Image()
        this.image.src = img
        this.width = this.image.width
        this.height = this.image.height
        this.image.onload = () => {
            this.width = this.image.width
            this.height = this.image.height
        }
        this.lives = 1
        this.position = {
            x: position.x,
            y: position.y,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
    }
}
