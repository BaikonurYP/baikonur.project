interface ProjectileProps {
    position: any
    velocity: any
}

export default class Projectile {
    position: any
    velocity: any
    radius: number
    c: any

    constructor(canvas: any, data: any) {
        this.c = canvas
        this.position = data.position
        this.velocity = data.velocity
        this.radius = 3
    }
}
