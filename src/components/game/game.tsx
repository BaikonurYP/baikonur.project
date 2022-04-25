import React, { FC, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

export const CanvasStyled = styled.canvas`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 8px;
`

class Player {
    position: { x: number; y: number }
    velocity: { x: number; y: number }
    width: number
    height: number
    c: any
    image: any

    constructor(canvas: any, shipImg: any) {
        this.c = canvas
        const image = new Image()
        image.src = shipImg

        this.image = image
        this.width = image.width
        this.height = image.height

        this.position = {
            x: canvas.canvas.width / 2 - this.width / 2,
            y: canvas.canvas.height - this.height - 20,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        console.log()
    }

    draw() {
        // this.c.fillStyle = 'red'
        // this.c.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height
        // )
        this.c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
    }
}

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

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const player = new Player(ctx, ShipImg)

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
                    console.log('fire')
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
                    console.log('fire')
                    break
            }
        })

        function animate() {
            requestAnimationFrame(animate)
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, ref.current.width, ref.current.height)
            player.update()
            if (keys.a.pressed && player.position.x >= 0) {
                player.velocity.x = -5
            } else if (
                keys.d.pressed &&
                player.position.x + player.width <= ctx.canvas.width
            ) {
                player.velocity.x = 5
            } else {
                player.velocity.x = 0
            }
        }

        animate()
    }, [])

    return (
        <CanvasStyled
            ref={ref}
            width={innerWidth}
            height={innerHeight}
        ></CanvasStyled>
    )
}

export default Game

//@ts-ignore

import ShipImg from '../../images/ships/shipMain.png'
