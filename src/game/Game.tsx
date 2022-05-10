import Paint from './Paint'
import Player from './Player'
import Projectile from './Projectile'
import Meteor from './Meteor'
import Invader from './Invader'
import Particle from './Particle'

import ShipImg from '../images/ships/shipMain.png'
import MeteorImg from '../images/Meteors/Meteor.png'
import InvaderImg from '../images/invaders/enemy_1.svg'
import PlayerProjectileImg from '../images/projectiles/projectile_blue.svg'
import InvaderProjectileImg from '../images/projectiles/projectile_green.svg'

import { getRandom } from '../utils/getRandom'
import { number } from 'yup'

const keyMap = {
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
}

class Game {
    ctx: CanvasRenderingContext2D
    player: Player
    enemies: (Invader | Meteor)[]
    projectiles: Projectile[]
    enemiesProjectiles: Projectile[]
    onChangePoint: (point: number) => void
    playerSpeed: number
    paint: Paint
    canvasWidth: number
    canvasHeight: number
    point: number
    onChangeLives: (num: number) => void
    lives: number
    particles: Particle[]

    constructor({
      ctx,
      onChangeLives,
      onChangePoints,
      playerLives,
    }: {
      ctx: CanvasRenderingContext2D;
      onChangePoints: (point: number) => void;
      onChangeLives: (num: number) => void;
      playerLives: number;
    }) {
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

        this.enemies = [
            new Invader(InvaderImg, {
                position: {
                    x: getRandom(0, this.canvasWidth),
                    y: -40,
                },
            }),
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
        this.lives = playerLives
        this.onChangePoint = onChangePoints
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
        this.enemies.forEach((enemy, i) => {
            if (
                enemy.position.y + enemy.width <=
                    this.player.position.y + this.player.height &&
                enemy.position.y + enemy.width > this.player.position.y &&
                enemy.position.x + enemy.width >= this.player.position.x &&
                enemy.position.x + enemy.width <=
                    this.player.position.x + this.player.width
            ) {
                this.enemies.splice(i, 1)
                this.lives -= 1
                this.onChangeLives(this.lives)
                if (this.lives === 0) alert('GG')
                this.createPaticles({
                    x: enemy.position.x,
                    y: enemy.position.y,
                })
                console.log('В вас попал метеорит')
            }
        })
        this.enemiesProjectiles.forEach((projectile, i) => {
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
                this.createPaticles({
                    x: projectile.position.x,
                    y: projectile.position.y,
                })
                this.enemiesProjectiles.splice(i, 1)
                this.lives -= 1
                this.onChangeLives(this.lives)
                if (this.lives === 0) alert('GG')
                console.log('В вас попал захватчик')
            }
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
                            new Projectile(InvaderProjectileImg, {
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
            if (enemy.position.y >= this.ctx.canvas.height) {
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
                        enemy.position.x >= this.ctx.canvas.width - enemy.width
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
                        this.createPaticles({
                            x: projectile.position.x,
                            y: projectile.position.y,
                        })

                        this.enemies.splice(i, 1)
                        this.projectiles.splice(j, 1)

                        if (enemy instanceof Meteor && enemy.scale != 0.4) {
                            const meterites = enemy.destruction()
                            meterites.forEach((meteorite) => {
                                this.enemies.push(meteorite)
                            })
                        }
                        this.point += 100
                        this.onChangePoint(this.point)
                    }, 0)
                }
            })
        })
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
        this.enemiesUpdate()
        this.projectilesUpdate()
        this.enemiesProjectilesUpdate()
        this.particlesUpdate()
    }

    start() {
        this.addListeners()
        this.animate()
        setInterval(() => {
            this.enemies.push(
                new Meteor(MeteorImg, {
                    position: {
                        x: 0,
                        y: 0,
                    },
                    scale: 1,
                })
            )
        }, 4000)
        setInterval(() => {
            this.enemies.push(
                new Invader(InvaderImg, {
                    position: {
                        x: getRandom(0, this.canvasWidth),
                        y: -40,
                    },
                })
            )
        }, 7000)
    }
}

export default Game
