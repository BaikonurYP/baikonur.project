import React, { FC, useRef, useEffect, useState } from 'react'

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
} from './GameComponentStyled'

interface GameInterfaceProps {
    children: any
    points: number
    lives: number
}

const GameInterface: FC<GameInterfaceProps> = (props) => {
    return (
        <Wrapper>
            {props.children}
            <Container>
                <LevelTitle>Уровень 1</LevelTitle>
                <Bar>
                    <LiveContainer>
                        <Live src={ShipImg}></Live>
                        <Live src={ShipImg}></Live>
                        <Live src={ShipImg}></Live>
                    </LiveContainer>
                    <Points>{props.points}</Points>
                </Bar>
            </Container>
        </Wrapper>
    )
}

export default GameInterface
