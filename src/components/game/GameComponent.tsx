import React, { FC, useRef, useEffect, useState } from 'react'
import Game from '../../game/Game'

//@ts-ignore
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

const GameComponent: FC = () => {
    const ref = useRef(null)
    const [points, setPoints] = useState(0)
    const [playerSpeed, setPlayerSpeed] = useState(7)

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const game = new Game(ctx, changePoints)
        game.start()
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

export default GameComponent
