import { getRandom } from '../utils/getRandom'

export default class Particle {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    opacity: number

    constructor(position: { x: number; y: number }) {
        this.position = position
        this.velocity = {
            x: getRandom(-3, 3),
            y: getRandom(-3, 3),
        }
        this.opacity = 1
    }
}
