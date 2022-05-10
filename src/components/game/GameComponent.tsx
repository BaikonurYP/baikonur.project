import React, { FC, useRef, useEffect, useState } from 'react'
import Game from '../../game/Game'
import { v4 as uuidv4 } from 'uuid'

import ShipImg from '../../images/ships/shipMain.png'

import {
    Wrapper,
    Container,
    LevelTitle,
    Bar,
    LiveContainer,
    Live,
    Points,
    CanvasStyled,
} from './GameComponentStyled'

const livesArray: any[] = []

for (let i = 0; i < 3; i++) {
    const live = {
        id: uuidv4(),
        image: ShipImg,
    }
    livesArray.push(live)
}

const GameComponent: FC = () => {
    const ref = useRef(null)
    const [points, setPoints] = useState(0)
    const [playerLives, setPlayerLives] = useState(3)
    const [playerSpeed, setPlayerSpeed] = useState(7)

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const game = new Game(ctx, onChangePoints, onChangeLives)
        game.start()
    }, [])

    function onChangePoints(num: number) {
        setPoints(num)
    }

    function onChangeLives(lives: number) {
        setPlayerLives(lives > 0 ? lives : 0)
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
                        {Array(playerLives)
                            .fill(null)
                            .map((value, index) => (
                                <Live src={ShipImg} key={index} />
                            ))}
                    </LiveContainer>
                    <Points>{points}</Points>
                </Bar>
            </Container>
        </Wrapper>
    )
}

export default GameComponent
