import CanvasObject from './CanvasObject'

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

    update(object: CanvasObject, option?: { rotation?: boolean }) {
        if (option) {
            if (option.rotation) {
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
        object.position.x += object.velocity.x
        object.position.y += object.velocity.y
    }
}
