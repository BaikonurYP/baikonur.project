import Meteor from './Meteor'
import { getRandom } from '../utils/getRandom'

export default class Meteorite extends Meteor {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    width: number
    height: number
    c: any
    image: any
    rotation: number

    constructor(ctx: CanvasRenderingContext2D, MeteorImg: string, data: any) {
        super(ctx, MeteorImg)
        const image = new Image()
        image.src = MeteorImg
        const scale = 0.4
        this.image = image
        this.width = image.width * scale
        this.height = image.height * scale
        this.rotation = 0.45

        this.position = {
            x: data.x,
            y: data.y,
        }
    }
}
