import CanvasObject from './CanvasObject'
import ShipImg from "../images/player/plain_1.svg";

interface IOption {
    position: {
        x: number
        y: number
    }
}

export default class Player extends CanvasObject {
    lives: number

    constructor(img: string = ShipImg, options: IOption) {
        super(img, options.position)
        this.lives = 3
        this.position = {
            x: options.position.x - this.width / 2,
            y: options.position.y - this.height - 20,
        }
    }
}
