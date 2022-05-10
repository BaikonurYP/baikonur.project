import Paint from './Paint'
import Player from './Player'
import Projectile from './Projectile'
import Meteor from './Meteor'
import Invader from './Invader'
import Particle from './Particle'

import ShipImg from '../images/ships/shipMain.png'
import MeteorImg from '../images/Meteors/Meteor.png'
import InvaderImg from '../images/invaders/enemy_1.svg'
import Invider2Img from '../images/invaders/enemy_2.png'
import PlayerProjectileImg from '../images/projectiles/projectile_blue.svg'
import InvaderProjectileImg from '../images/projectiles/projectile_green.svg'

import { getRandom } from '../utils/getRandom'
import { number } from 'yup'
import CanvasObject from './CanvasObject'

const keyMap = {
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
}

type ShootingObjects = Invader

type AllObject = CanvasObject | Particle

class Game {
    ctx: CanvasRenderingContext2D
    player: Player
    projectiles: Projectile[]
    enemiesProjectiles: Projectile[]
    onChangePoint: (point: number) => void
    playerSpeed: number
    paint: Paint
    canvasWidth: number
    canvasHeight: number
    point: number
    onChangeLives: (num: number) => void
    particles: Particle[]
    invaders: Invader[]
    meteors: Meteor[]

    constructor(
        ctx: CanvasRenderingContext2D,
        onChangePoint: (point: number) => void,
        onChangeLives: (num: number) => void
    ) {
        this.paint = new Paint(ctx)
        this.ctx = ctx
        this.canvasWidth = ctx.canvas.width
        this.canvasHeight = ctx.canvas.height
        this.player = new Player(ShipImg, {
            position: {
                x: this.canvasWidth / 2,
                y: this.canvasHeight,
            },
        })
        this.playerSpeed = 7
        this.invaders = [
            new Invader(InvaderImg, {
                position: {
                    x: getRandom(0, this.canvasWidth),
                    y: -40,
                },
            }),
        ]
        this.meteors = [
            new Meteor(MeteorImg, {
                position: {
                    x: getRandom(10, this.canvasWidth - 10),
                    y: -20,
                },
                scale: 1,
            }),
        ]
        this.projectiles = []
        this.enemiesProjectiles = []
        this.particles = []
        this.point = 0
        this.onChangePoint = onChangePoint
        this.onChangeLives = onChangeLives
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
                    setTimeout(() => {
                        this.projectiles.push(
                            new Projectile(PlayerProjectileImg, {
                                position: {
                                    x:
                                        this.player.position.x +
                                        this.player.width / 2,
                                    y: this.player.position.y,
                                },
                                velocity: { x: 0, y: -10 },
                            })
                        )
                    }, 0)

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
            this.player.position.x + this.player.width <= this.ctx.canvas.width
        ) {
            this.player.position.x = this.player.position.x + this.playerSpeed
        }
        if (keyMap.w && this.player.position.y >= 200) {
            this.player.position.y = this.player.position.y - this.playerSpeed
        }
        if (
            keyMap.s &&
            this.player.position.y + this.player.height <=
                this.ctx.canvas.height
        ) {
            this.player.position.y = this.player.position.y + this.playerSpeed
        }
    }

    drawBackground() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    playerUpdate() {
        this.meteors.forEach((meteor, i) => {
            this.hitToPlayer(meteor, i, this.meteors)
        })

        this.enemiesProjectiles.forEach((projectile, i) => {
            this.hitToPlayer(projectile, i, this.enemiesProjectiles)
        })
        this.paint.update(this.player)
    }

    createPaticles(position: { x: number; y: number }) {
        for (let i = 0; i <= 15; i++) {
            this.particles.push(
                new Particle({
                    x: position.x,
                    y: position.y,
                })
            )
        }
    }

    aimAtPlayer(enemy: ShootingObjects) {
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

            if (this.enemiesProjectiles.length === 0) {
                this.shootToPlayer(enemy)
            }
        }
    }

    shootToPlayer(enemy: Invader) {
        this.enemiesProjectiles.push(
            new Projectile(InvaderProjectileImg, {
                position: {
                    x: enemy.position.x + enemy.width / 2,
                    y: enemy.position.y + enemy.height,
                },
                velocity: { x: 0, y: 5 },
            })
        )
    }

    remoovebject(arr: any, index: number) {
        setTimeout(() => {
            arr.splice(index, 1)
        }, 0)
    }

    transformInvider(position: { x: number; y: number }) {
        this.invaders.splice(0, 2)
        setTimeout(() => {
            this.invaders.push(
                new Invader(Invider2Img, {
                    position: {
                        x: position.x,
                        y: position.y,
                    },
                })
            )
        }, 0)
    }

    invidersUpdate() {
        this.invaders.forEach((invader, i) => {
            this.aimAtPlayer(invader)
            this.paint.update(invader)
            this.hitToObject(invader, i, this.invaders)
            if (this.invaders.length > 1) {
                const firstInvider = this.invaders[0]
                const secondInvider = this.invaders[1]
                if (
                    firstInvider.position.x + firstInvider.width >=
                        secondInvider.position.x &&
                    firstInvider.position.x + firstInvider.width <=
                        secondInvider.position.x + secondInvider.width &&
                    firstInvider.position.y + firstInvider.height >=
                        secondInvider.position.y &&
                    firstInvider.position.y + firstInvider.height <=
                        secondInvider.position.y + secondInvider.height
                ) {
                    this.transformInvider({
                        x: firstInvider.position.x,
                        y: firstInvider.position.y,
                    })
                }
            }
        })
    }

    meteorDestraktion(meteor: Meteor) {
        if (meteor.scale != 0.4) {
            const meterites = meteor.destruction()
            meterites.forEach((meteorite) => {
                this.meteors.push(meteorite)
            })
        }
        return
    }

    meteorsUpdate() {
        this.meteors.forEach((meteor, i) => {
            if (
                meteor.position.x <= 0 ||
                meteor.position.x >= this.ctx.canvas.width - meteor.width
            ) {
                meteor.velocity.x = -meteor.velocity.x
            }
            this.paint.update(meteor, { rotation: true })
            this.hitToObject(meteor, i, this.meteors, () => {
                this.meteorDestraktion(meteor)
            })
        })
    }

    hitToObject(
        enemy: CanvasObject,
        index: number,
        enemiesArr: CanvasObject[],
        action?: any
    ) {
        this.projectiles.forEach((projectile, j) => {
            if (
                projectile.position.y + projectile.width <=
                    enemy.position.y + enemy.height &&
                projectile.position.y + projectile.width > enemy.position.y &&
                projectile.position.x + projectile.width >= enemy.position.x &&
                projectile.position.x + projectile.width <=
                    enemy.position.x + enemy.width
            ) {
                setTimeout(() => {
                    this.createPaticles({
                        x: projectile.position.x,
                        y: projectile.position.y,
                    })

                    enemiesArr.splice(index, 1)
                    this.projectiles.splice(j, 1)

                    if (action) {
                        action()
                    }
                    this.point += 100
                    this.onChangePoint(this.point)
                }, 0)
            }
        })
    }

    hitToPlayer(
        object: CanvasObject,
        index: number,
        objectsArr: CanvasObject[]
    ) {
        if (
            object.position.y + object.width <=
                this.player.position.y + this.player.height &&
            object.position.y + object.width > this.player.position.y &&
            object.position.x + object.width >= this.player.position.x &&
            object.position.x + object.width <=
                this.player.position.x + this.player.width
        ) {
            objectsArr.splice(index, 1)
            this.createPaticles({
                x: object.position.x,
                y: object.position.y,
            })
            this.player.lives -= 1
            this.onChangeLives(this.player.lives)
            console.log('В вас попали')
        }
    }

    projectilesUpdate() {
        this.projectiles.forEach((projectile, index) => {
            if (projectile.position.y + projectile.width <= 0) {
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
                this.ctx.canvas.height
            ) {
                setTimeout(() => {
                    this.enemiesProjectiles.splice(index, 1)
                }, 0)
            } else {
                this.paint.update(projectile)
            }
        })
    }

    particlesUpdate() {
        this.particles.forEach((particle, i) => {
            if (particle.opacity <= 0) {
                setTimeout(() => {
                    this.particles.splice(i, 1)
                }, 0)
                return
            }
            this.paint.updateParticle(particle)
        })
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.drawBackground()
        this.control()
        this.playerUpdate()
        this.invidersUpdate()
        this.meteorsUpdate()
        this.projectilesUpdate()
        this.enemiesProjectilesUpdate()
        this.particlesUpdate()
    }

    start() {
        this.addListeners()
        this.animate()
        setInterval(() => {
            this.meteors.push(
                new Meteor(MeteorImg, {
                    position: {
                        x: 0,
                        y: 0,
                    },
                    scale: 1,
                })
            )
        }, 4000)
        setTimeout(() => {
            this.invaders.push(
                new Invader(InvaderImg, {
                    position: {
                        x: getRandom(0, this.canvasWidth),
                        y: -40,
                    },
                })
            )
        }, 2000)
    }
}

export default Game
