import React, { FC, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { getRandom } from '../../utils/getRandom'

//@ts-ignore
import ShipImg from '../../images/ships/shipMain.png'
//@ts-ignore
import MeteorImg from '../../images/Meteors/Meteor.png'

import Player from './Player'
import Projectile from './Projectile'
import Meteor from './Meteor'
import Meteorite from './Meteorite'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    margin: 10px 0 0 0;
    padding: 0 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const LevelTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-family: 'SpaceFont';
    text-transform: uppercase;
    color: var(--yellow);
`

export const Bar = styled.div`
    margin: 5px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`

export const LiveContainer = styled.div`
    display: flex;
`

export const Live = styled.img`
    margin: 0 5px;
    width: 32px;
    height: 25px;
`

export const Points = styled(LevelTitle)`
    margin: 0;
    color: var(--white);
`

export const CanvasStyled = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 8px;
    z-index: -1;
`

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    space: {
        pressed: false,
    },
}

const Game: FC = () => {
    const ref = useRef(null)
    const [points, setPoints] = useState(0)
    const [playerSpeed, setPlayerSpeed] = useState(7)

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const player = new Player(ctx, ShipImg)
        const projectiles: Array<Projectile> = []
        const enemies = [new Meteor(ctx, MeteorImg)]
        setInterval(() => {
            enemies.push(new Meteor(ctx, MeteorImg))
        }, 2000)

        addEventListener('keydown', ({ key }) => {
            switch (key) {
                case 'w':
                    keys.w.pressed = true
                    break
                case 'a':
                    keys.a.pressed = true
                    break
                case 's':
                    keys.s.pressed = true
                    break
                case 'd':
                    keys.d.pressed = true
                    break
                case ' ':
                    projectiles.push(
                        new Projectile(ctx, {
                            position: {
                                x: player.position.x + player.width / 2,
                                y: player.position.y,
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
                    keys.w.pressed = false
                    break
                case 'a':
                    keys.a.pressed = false
                    break
                case 's':
                    keys.s.pressed = false
                    break
                case 'd':
                    keys.d.pressed = false
                    break
                case ' ':
                    break
            }
        })

        function animate() {
            requestAnimationFrame(animate)
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, ref.current.width, ref.current.height)
            player.update()
            enemies.forEach((enemy, i) => {
                if (enemy.position.y >= ctx.canvas.height) {
                    setTimeout(() => {
                        enemies.splice(i, 1)
                    }, 0)
                } else {
                    enemy.update()
                }
                projectiles.forEach((projectile, j) => {
                    if (
                        projectile.position.y + projectile.radius <=
                            enemy.position.y + enemy.height &&
                        projectile.position.y + projectile.radius >
                            enemy.position.y &&
                        projectile.position.x + projectile.radius >=
                            enemy.position.x &&
                        projectile.position.x + projectile.radius <=
                            enemy.position.x + enemy.width
                    ) {
                        setTimeout(() => {
                            enemies.splice(i, 1)
                            projectiles.splice(j, 1)
                            if (enemy instanceof Meteor) {
                                const meteriteNum = getRandom(1, 3)
                                for (let i = 0; i <= meteriteNum; i++) {
                                    enemies.push(
                                        new Meteorite(ctx, MeteorImg, {
                                            x: enemy.position.x,
                                            y: enemy.position.y,
                                        })
                                    )
                                }
                            }

                            changePoints(100)
                        }, 0)
                    }
                })
            })

            projectiles.forEach((projectile, index) => {
                if (projectile.position.y + projectile.radius <= 0) {
                    setTimeout(() => {
                        projectiles.splice(index, 1)
                    }, 0)
                } else {
                    projectile.update()
                }
            })

            if (keys.a.pressed && player.position.x >= 0) {
                player.velocity.x = -playerSpeed
            } else if (
                keys.d.pressed &&
                player.position.x + player.width <= ctx.canvas.width
            ) {
                player.velocity.x = playerSpeed
            } else if (keys.w.pressed && player.position.y >= 200) {
                player.velocity.y = -playerSpeed
            } else if (
                keys.s.pressed &&
                player.position.y + player.height <= ctx.canvas.height
            ) {
                player.velocity.y = playerSpeed
            } else {
                player.velocity.x = 0
                player.velocity.y = 0
            }
        }

        animate()
    }, [])

    function changePoints(num: number) {
        setPoints(points + num)
    }

    return (
        <Wrapper>
            <CanvasStyled
                ref={ref}
                width={innerWidth}
                height={innerHeight}
            ></CanvasStyled>
            <Container>
                <LevelTitle>Уровень 1</LevelTitle>
                <Bar>
                    <LiveContainer>
                        <Live src={ShipImg}></Live>
                        <Live src={ShipImg}></Live>
                        <Live src={ShipImg}></Live>
                    </LiveContainer>
                    <Points>{points}</Points>
                </Bar>
            </Container>
        </Wrapper>
    )
}

export default Game
