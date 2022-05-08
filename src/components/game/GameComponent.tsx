import React, { FC, useRef, useEffect, useState } from 'react'
import Game from '../../game/Game'
import { v4 as uuidv4 } from 'uuid'

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
    const [playerLives, setPlayerLives] = useState(livesArray)
    const [playerSpeed, setPlayerSpeed] = useState(7)

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const game = new Game(ctx, changePoints, changeLives)
        game.start()
    }, [])

    function changePoints(num: number) {
        setPoints(num)
    }

    function changeLives() {
        let copy = Object.assign([], playerLives)
        copy.splice(0, 1)
        setPlayerLives(copy)
    }

    return (
        <Wrapper onClick={changeLives}>
            <CanvasStyled
                ref={ref}
                width={innerWidth}
                height={innerHeight}
            ></CanvasStyled>
            <Container>
                <LevelTitle>Уровень 1</LevelTitle>
                <Bar>
                    <LiveContainer>
                        {playerLives.map((item) => (
                            <Live src={item.image} key={item.id}></Live>
                        ))}
                    </LiveContainer>
                    <Points>{points}</Points>
                </Bar>
            </Container>
        </Wrapper>
    )
}

export default GameComponent
