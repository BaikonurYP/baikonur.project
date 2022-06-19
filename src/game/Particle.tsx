import { getRandom } from '../utils/getRandom'

export interface IParticleOption {
    position: {
        x: number
        y: number
    }
    velocity: {
        x: number
        y: number
    }
    size: {
        min: number
        max: number
    }
    fades?: boolean
    color: string
}

export default class Particle {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    opacity: number
    fades: boolean = false
    color: string
    size: { min: number; max: number }

    constructor(options: IParticleOption) {
        this.size = {
            min: options.size.min,
            max: options.size.max
        }
        this.position = options.position
        this.velocity = options.velocity
        this.color = options.color
        this.opacity = 1
        this.fades = options.fades
    }
}
