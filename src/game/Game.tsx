import Paint from './Paint'
import Player from './Player'
import Projectile from './Projectile'
import Meteor from './Meteor'
import Invader from './Invader'

//@ts-ignore
import ShipImg from '../images/ships/shipMain.png'
//@ts-ignore
import MeteorImg from '../images/Meteors/Meteor.png'
//@ts-ignore
import InvaderImg from '../images/invaders/enemy_1.svg'
//@ts-ignore
import PlayerProjectileImg from '../images/projectiles/projectile_blue.svg'
//@ts-ignore
import InvaderProjectileImg from '../images/projectiles/projectile_green.svg'

import { getRandom } from '../utils/getRandom'

const keyMap = {
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
}

class Game {
    canvas: CanvasRenderingContext2D
    player: Player
    enemies: (Invader | Meteor)[]
    projectiles: Projectile[]
    enemiesProjectiles: Projectile[]
    onChangePoint: (point: number) => void
    playerSpeed: number
    paint: Paint
    size: { width: number; height: number }

    constructor(
        ctx: CanvasRenderingContext2D,
        onChangePoint: (point: number) => void
    ) {
        this.paint = new Paint(ctx)
        this.canvas = ctx
        this.size = { width: ctx.canvas.width, height: ctx.canvas.height }
        this.player = new Player(this.canvas, ShipImg, this.size)
        this.playerSpeed = 7

        this.enemies = [
            new Invader(this.canvas, InvaderImg, this.size),
            new Meteor(this.canvas, MeteorImg),
        ]
        this.projectiles = []
        this.enemiesProjectiles = []
        this.onChangePoint = onChangePoint
    }

    addListeners() {
        addEventListener('keydown', ({ key }) => {
            switch (key) {
                case 'w':
                    keyMap.w = true
                    break
                case 'a':
                    keyMap.a = true
                    break
                case 's':
                    keyMap.s = true
                    break
                case 'd':
                    keyMap.d = true
                    break
                case ' ':
                    this.projectiles.push(
                        new Projectile(this.canvas, PlayerProjectileImg, {
                            position: {
                                x:
                                    this.player.position.x +
                                    this.player.width / 2,
                                y: this.player.position.y,
                            },
                            velocity: { x: 0, y: -10 },
                        })
                    )
                    break
            }
        })

        addEventListener('keyup', ({ key }) => {
            switch (key) {
                case 'w':
                    keyMap.w = false
                    break
                case 'a':
                    keyMap.a = false
                    break
                case 's':
                    keyMap.s = false
                    break
                case 'd':
                    keyMap.d = false
                    break
                case ' ':
                    break
            }
        })
    }

    control() {
        if (keyMap.a && this.player.position.x >= 0) {
            this.player.position.x = this.player.position.x - this.playerSpeed
        }
        if (
            keyMap.d &&
            this.player.position.x + this.player.width <=
                this.canvas.canvas.width
        ) {
            this.player.position.x = this.player.position.x + this.playerSpeed
        }
        if (keyMap.w && this.player.position.y >= 200) {
            this.player.position.y = this.player.position.y - this.playerSpeed
        }
        if (
            keyMap.s &&
            this.player.position.y + this.player.height <=
                this.canvas.canvas.height
        ) {
            this.player.position.y = this.player.position.y + this.playerSpeed
        }
    }

    drawBackground() {
        this.canvas.fillStyle = 'black'
        this.canvas.fillRect(
            0,
            0,
            this.canvas.canvas.width,
            this.canvas.canvas.height
        )
    }

    playerUpdate() {
        this.enemies.forEach((enemy) => {
            if (
                enemy.position.y + enemy.width <=
                    this.player.position.y + this.player.height &&
                enemy.position.y + enemy.width > this.player.position.y &&
                enemy.position.x + enemy.width >= this.player.position.x &&
                enemy.position.x + enemy.width <=
                    this.player.position.x + this.player.width
            ) {
                console.log('В вас попал метеорит')
            }
        })
        this.enemiesProjectiles.forEach((projectile) => {
            if (
                projectile.position.y + projectile.width <=
                    this.player.position.y + this.player.height &&
                projectile.position.y + projectile.width >
                    this.player.position.y &&
                projectile.position.x + projectile.width >=
                    this.player.position.x &&
                projectile.position.x + projectile.width <=
                    this.player.position.x + this.player.width
            ) {
                console.log('В вас попал захватчик')
            }
        })
        this.player.update()
    }

    enemiesUpdate() {
        this.enemies.forEach((enemy, i) => {
            if (enemy instanceof Invader) {
                if (enemy.position.y > 100) {
                    enemy.velocity.y = 0
                }
                if (enemy.position.x < this.player.position.x) {
                    enemy.velocity.x = 3
                }
                if (enemy.position.x > this.player.position.x) {
                    enemy.velocity.x = -3
                }
                if (
                    enemy.position.x - 1 <= this.player.position.x &&
                    enemy.position.x + 1 >= this.player.position.x
                ) {
                    enemy.velocity.x = 0
                    if (this.enemiesProjectiles.length < 1) {
                        this.enemiesProjectiles.push(
                            new Projectile(this.canvas, InvaderProjectileImg, {
                                position: {
                                    x: enemy.position.x + enemy.width / 2,
                                    y: enemy.position.y + enemy.height,
                                },

                                velocity: { x: 0, y: 5 },
                            })
                        )
                    }
                }
            }
            if (enemy.position.y >= this.canvas.canvas.height) {
                setTimeout(() => {
                    this.enemies.splice(i, 1)
                }, 0)
            } else {
                if (enemy instanceof Invader) {
                    this.paint.update(enemy)
                }
                if (enemy instanceof Meteor) {
                    if (
                        enemy.position.x <= 0 ||
                        enemy.position.x >=
                            this.canvas.canvas.width - enemy.width
                    ) {
                        enemy.velocity.x = -enemy.velocity.x
                    }
                    this.paint.update(enemy, { rotation: true })
                }
            }

            this.projectiles.forEach((projectile, j) => {
                if (
                    projectile.position.y + projectile.width <=
                        enemy.position.y + enemy.height &&
                    projectile.position.y + projectile.width >
                        enemy.position.y &&
                    projectile.position.x + projectile.width >=
                        enemy.position.x &&
                    projectile.position.x + projectile.width <=
                        enemy.position.x + enemy.width
                ) {
                    setTimeout(() => {
                        this.enemies.splice(i, 1)
                        this.projectiles.splice(j, 1)
                        if (enemy instanceof Meteor && enemy.scale != 0.4) {
                            const meterites = enemy.destruction()
                            meterites.forEach((meteorite) => {
                                this.enemies.push(meteorite)
                            })
                        }

                        this.onChangePoint(100)
                    }, 0)
                }
            })
        })
    }

    projectilesUpdate() {
        this.projectiles.forEach((projectile, index) => {
            if (projectile.position.y + projectile.radius <= 0) {
                setTimeout(() => {
                    this.projectiles.splice(index, 1)
                }, 0)
            } else {
                this.paint.update(projectile)
            }
        })
    }

    enemiesProjectilesUpdate() {
        this.enemiesProjectiles.forEach((projectile, index) => {
            if (
                projectile.position.y - projectile.height >=
                this.canvas.canvas.height
            ) {
                setTimeout(() => {
                    this.enemiesProjectiles.splice(index, 1)
                }, 0)
            } else {
                this.paint.update(projectile)
            }
        })
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.drawBackground()
        this.control()
        this.paint.update(this.player)
        this.enemiesUpdate()
        this.projectilesUpdate()
        this.enemiesProjectilesUpdate()
    }

    start() {
        this.addListeners()
        this.animate()
        setInterval(() => {
            this.enemies.push(new Meteor(this.canvas, MeteorImg))
        }, 7000)
    }
}

export default Game
