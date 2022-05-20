import React, { FC } from 'react'
import GameComponent from '../../components/game/GameComponent'

import { Wrapper } from './GamePageStyled'

const GamePage: FC = () => {
    return (
        <Wrapper>
            <GameComponent></GameComponent>
        </Wrapper>
    )
}

export default GamePage
