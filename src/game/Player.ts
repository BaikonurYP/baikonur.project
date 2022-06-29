import CanvasObject from './CanvasObject'

interface IOption {
    position: {
        x: number
        y: number
    }
}

export default class Player extends CanvasObject {
    lives: number
    constructor(img: string, options: IOption) {
        super(img, options.position)
        this.lives = 3
        this.position = {
            x: options.position.x - this.width / 2,
            y: options.position.y - this.height - 20,
        }
    }
}
