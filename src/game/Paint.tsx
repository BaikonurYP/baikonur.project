import CanvasObject from './CanvasObject'
import Particle from './Particle'

import { getRandom } from '../utils/getRandom'
import Invader from './Invader'

export default class Paint {
    ctx: CanvasRenderingContext2D
    rotation: number = 0.45

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
    }

    rotate(object: CanvasObject) {
        const x = object.position.x + object.width / 2
        const y = object.position.y + object.height / 2
        this.ctx.translate(x, y)
        this.ctx.rotate(Math.PI / this.rotation)
        this.ctx.translate(-x, -y)
    }

    draw(object: CanvasObject) {
        this.ctx.drawImage(
            object.image,
            object.position.x,
            object.position.y,
            object.width,
            object.height
        )
    }

    drawParticle(object: Particle) {
        this.ctx.save()
        this.ctx.globalAlpha = object.opacity
        this.ctx.beginPath()
        this.ctx.arc(
            object.position.x,
            object.position.y,
            getRandom(0.1, 7),
            0,
            Math.PI * 2
        )
        this.ctx.fillStyle = '#BAA0DE'
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()
    }

    mooveObject(object: CanvasObject | Particle) {
        object.position.x += object.velocity.x
        object.position.y += object.velocity.y
    }

    update(object: CanvasObject, option?: { rotation?: boolean }) {
        if (option) {
            if (option.rotation && object instanceof CanvasObject) {
                this.rotation += 0.001
                this.ctx.save()
                this.rotate(object)
                this.draw(object)
                this.ctx.restore()
                object.position.x += object.velocity.x
                object.position.y += object.velocity.y
                return
            }
            return
        }
        this.draw(object)
        this.mooveObject(object)
    }

    updateParticle(object: Particle) {
        this.drawParticle(object)
        object.opacity -= 0.02
        this.mooveObject(object)
    }
}
