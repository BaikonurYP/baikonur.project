import CanvasObject from './CanvasObject'
import Paint from './Paint'
import Player from './Player'
import Projectile from './Projectile'
import Meteor from './Meteor'
import Invader from './Invader'
import Particle from './Particle'
import Perk from './Perk'

import ShipImg from '../images/player/plain_1.svg'
import MeteorImg from '../images/Meteors/Meteor.png'
import InvaderImg from '../images/invaders/enemy_1.svg'
import Invider2Img from '../images/invaders/enemy_2.svg'
import PlayerProjectileImg from '../images/projectiles/projectile_blue.svg'
import InvaderProjectileImg from '../images/projectiles/projectile_green.svg'
import firePerkImg from '../images/perks/flash.svg'
import livePerkImg from '../images/perks/heart.svg'
import timePerkImg from '../images/perks/clock.svg'

import { getRandom } from '../utils/getRandom'

const keyMap = {
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    esc: false
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

    onChangeLevel: (num: number) => void

    particles: Particle[]

    invaders: Invader[]

    meteors: Meteor[]

    stars: Particle[]

    complexity: number

    shooting: boolean

    per: number

    pause: boolean

    perks: Perk[]

    firePower: number

    meteorTimeStep: number

    invaderTimeStep: number

    perkTimeStep: number

    complexityTimeStep: number

    constructor(
        ctx: CanvasRenderingContext2D,
        playerImage: string,
        onChangePoint: (point: number) => void,
        onChangeLives: (num: number) => void,
        onChangeLevel: (num: number) => void
    ) {
        this.paint = new Paint(ctx)
        this.ctx = ctx
        this.canvasWidth = ctx.canvas.width
        this.canvasHeight = ctx.canvas.height
        this.complexity = 1
        this.player = new Player(playerImage, {
            position: {
                x: this.canvasWidth / 2,
                y: this.canvasHeight
            }
        })
        this.playerSpeed = 7
        this.invaders = []
        this.meteors = [
            new Meteor(MeteorImg, {
                position: {
                    x: getRandom(10, this.canvasWidth - 10),
                    y: -20
                },
                scale: 1
            })
        ]
        this.projectiles = []
        this.enemiesProjectiles = []
        this.particles = []
        this.stars = []

        this.perks = []
        this.point = 0
        this.per = 0
        this.firePower = 250
        this.pause = false
        this.onChangePoint = onChangePoint
        this.onChangeLives = onChangeLives
        this.onChangeLevel = onChangeLevel
        this.meteorTimeStep = 0
        this.invaderTimeStep = 0
        this.perkTimeStep = 0
        this.complexityTimeStep = 0
    }

    fireUpgrade = () => {
        if (this.firePower < 100) {
            return
        }
        this.firePower -= 20
    }

    liveUpgrade = () => {
        this.player.lives += 1
        this.onChangeLives(this.player.lives)
    }

    timeUpgrade = () => {
        if (this.complexity === 1) {
            return
        }
        this.complexity -= 1
        this.onChangeLevel(this.complexity)
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
                    keyMap.space = true
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
                    keyMap.space = false
                    break
            }
        })
    }

    onPause() {
        if (this.pause) {
            this.pause = false
            this.animate()
        } else {
            this.pause = true
        }
    }

    control() {
        if (keyMap.a && this.player.position.x >= 0) {
            this.player.position.x -= this.playerSpeed
        }

        if (
            keyMap.d &&
            this.player.position.x + this.player.width <= this.ctx.canvas.width
        ) {
            this.player.position.x += this.playerSpeed
        }

        if (keyMap.w && this.player.position.y >= 200) {
            this.player.position.y -= this.playerSpeed
        }

        if (
            keyMap.s &&
            this.player.position.y + this.player.height <=
                this.ctx.canvas.height
        ) {
            this.player.position.y += this.playerSpeed
        }
        if (keyMap.space) {
            this.shoot()
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

    shoot() {
        let per = performance.now()
        if (per - this.per < this.firePower) {
            return
        }
        this.projectiles.push(
            new Projectile(PlayerProjectileImg, {
                position: {
                    x: this.player.position.x + this.player.width / 2,
                    y: this.player.position.y
                },
                velocity: { x: 0, y: -10 }
            })
        )
        this.per = per
    }

    createPaticles(position: { x: number; y: number }) {
        for (let i = 0; i <= 15; i++) {
            this.particles.push(
                new Particle({
                    position: {
                        x: position.x,
                        y: position.y
                    },
                    velocity: {
                        x: getRandom(-3, 3),
                        y: getRandom(-3, 3)
                    },
                    size: {
                        min: 0.1,
                        max: 5
                    },
                    color: '#BAA0DE'
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
            enemy.position.x - 2 <= this.player.position.x &&
            enemy.position.x + 2 >= this.player.position.x
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
                    y: enemy.position.y + enemy.height
                },
                velocity: { x: 0, y: 5 }
            })
        )
    }

    transformInvider(position: { x: number; y: number }) {
        this.invaders.splice(0, 2)
        setTimeout(() => {
            this.invaders.push(
                new Invader(Invider2Img, {
                    position: {
                        x: position.x,
                        y: position.y
                    },
                    scale: 1.2,
                    lives: 3
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
                        y: firstInvider.position.y
                    })
                }
            }
        })
    }

    meteorDestraction(meteor: Meteor) {
        if (meteor.scale !== 0.6) {
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
                this.meteorDestraction(meteor)
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
                        y: projectile.position.y
                    })

                    if (enemy.lives === 1) {
                        enemiesArr.splice(index, 1)
                        this.projectiles.splice(j, 1)
                    }
                    if (enemy.lives > 1) {
                        enemy.lives -= 1
                        this.projectiles.splice(j, 1)
                    }

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
            object.position.y + object.height >= this.player.position.y &&
            object.position.y + object.height <=
                this.player.position.y + this.player.height &&
            object.position.x + object.width >= this.player.position.x &&
            object.position.x + object.width <=
                this.player.position.x + this.player.width
        ) {
            objectsArr.splice(index, 1)
            this.createPaticles({
                x: object.position.x,
                y: object.position.y
            })

            this.player.lives -= 1
            this.onChangeLives(this.player.lives)
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

    createStars() {
        for (let i = 0; i <= 100; i++) {
            this.particles.push(
                new Particle({
                    position: {
                        x: getRandom(0, this.canvasWidth),
                        y: getRandom(0, this.canvasHeight)
                    },
                    velocity: {
                        x: 0,
                        y: 0.3
                    },
                    size: {
                        min: 0.1,
                        max: 3
                    },
                    fades: true,
                    color: 'white'
                })
            )
        }
    }

    particlesUpdate() {
        this.particles.forEach((particle, i) => {
            if (particle.fades) {
                if (this.complexity <= 20) {
                    particle.velocity.y = this.complexity
                }
            }
            if (particle.opacity <= 0) {
                setTimeout(() => {
                    this.particles.splice(i, 1)
                }, 0)
                return
            }
            if (particle.position.y >= this.canvasHeight) {
                particle.position.y = -1
            }
            this.paint.updateParticle(particle)
        })
    }

    perksUpdate() {
        this.perks.forEach((perk, i) => {
            if (
                perk.position.y + perk.height >= this.player.position.y &&
                perk.position.y + perk.height > this.player.position.y &&
                perk.position.x + perk.width >= this.player.position.x &&
                perk.position.x + perk.width <=
                    this.player.position.x + this.player.width
            ) {
                this.perks.splice(i, 1)
                perk.upgrade()
            }
            if (perk.position.y >= this.canvasWidth) {
                this.perks.splice(i, 1)
            }
            this.paint.update(perk)
        })
    }

    addPerk = () => {
        const perkStep = performance.now()
        if (perkStep - this.perkTimeStep > 15000) {
            let perkNum
            if (this.complexity > 1) {
                perkNum = getRandom(1, 4)
            } else {
                perkNum = getRandom(1, 3)
            }
            switch (perkNum) {
                case 1:
                    this.perks.push(
                        new Perk(
                            firePerkImg,
                            {
                                x: getRandom(
                                    this.player.width,
                                    this.canvasWidth - this.player.width
                                ),
                                y: -30
                            },
                            this.fireUpgrade
                        )
                    )
                    break
                case 2:
                    this.perks.push(
                        new Perk(
                            livePerkImg,
                            {
                                x: getRandom(
                                    this.player.width,
                                    this.canvasWidth - this.player.width
                                ),
                                y: -30
                            },
                            this.liveUpgrade
                        )
                    )
                    break
                case 3:
                    this.perks.push(
                        new Perk(
                            timePerkImg,
                            {
                                x: getRandom(
                                    this.player.width,
                                    this.canvasWidth - this.player.width
                                ),
                                y: -30
                            },
                            this.timeUpgrade
                        )
                    )
                    break
            }
            this.perkTimeStep = perkStep
        }
        return
    }

    addMeteor() {
        const meteorStep = performance.now()
        if (meteorStep - this.meteorTimeStep > (5000 / this.complexity) * 1.2) {
            this.meteors.push(
                new Meteor(MeteorImg, {
                    position: {
                        x: getRandom(60, this.canvasWidth - 60),
                        y: -60
                    },
                    scale: 1
                })
            )
            this.meteorTimeStep = meteorStep
        }
        return
    }

    addInvader() {
        const invaderStep = performance.now()
        if (
            invaderStep - this.invaderTimeStep >
            (3000 / this.complexity) * 1.5
        ) {
            if (this.invaders.length >= 2) {
                return
            }
            if (this.invaders.length > 0 && this.invaders[0].scale > 1) {
                return
            }
            this.invaders.push(
                new Invader(InvaderImg, {
                    position: {
                        x: getRandom(0, this.canvasWidth),
                        y: -40
                    },
                    scale: 1,
                    lives: 1
                })
            )
            this.invaderTimeStep = invaderStep
        }
        return
    }

    increaseComplexity() {
        const complexityTimeStep = performance.now()
        if (complexityTimeStep - this.complexityTimeStep > 20000) {
            this.complexity += 1
            this.onChangeLevel(this.complexity)
            this.complexityTimeStep = complexityTimeStep
        }
    }

    animate = () => {
        if (!this.pause) {
            requestAnimationFrame(this.animate)
        }
        this.drawBackground()
        this.particlesUpdate()
        this.projectilesUpdate()
        this.meteorsUpdate()
        if (this.player.lives > 0) {
            this.control()
            this.enemiesProjectilesUpdate()
            this.playerUpdate()
        }
        this.invidersUpdate()
        this.perksUpdate()
        this.addMeteor()
        this.addInvader()
        this.addPerk()
        this.increaseComplexity()
    }

    start() {
        this.addListeners()
        this.animate()
        this.createStars()
    }

    restart() {
        this.player.position = {
            x: this.canvasWidth / 2 - this.player.width / 2,
            y: this.canvasHeight - this.player.height - 20
        }
        this.point = 0
        this.player.lives = 3
        this.firePower = 250
        this.complexity = 1
        this.meteors = []
        this.invaders = []
        this.projectiles = []
        this.enemiesProjectiles = []
        this.perks = []
        this.onChangeLevel(1)
        this.onChangePoint(0)
        this.onChangeLives(3)
        this.meteorTimeStep = 0
        this.invaderTimeStep = 0
        this.perkTimeStep = 0
    }
}

export default Game
