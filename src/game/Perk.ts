import CanvasObject from './CanvasObject'

export default class Perk extends CanvasObject {
    upgrade: () => void

    constructor(
        img: string,
        position: { x: number; y: number },
        upgrade: () => void
    ) {
        super(img, position)
        this.image.onload = () => {
            this.width = 25
            this.height = 25
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.upgrade = upgrade
    }
}
