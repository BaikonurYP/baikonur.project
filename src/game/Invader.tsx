import CanvasObject from './CanvasObject'

interface IOption {
    position: {
        x: number
        y: number
    }
}

export default class Invader extends CanvasObject {
    constructor(shipImg: string, options: IOption) {
        super(shipImg, options.position)
        this.velocity = {
            x: 0,
            y: 3,
        }
    }
}
