import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
`

import GameComponent from '../../components/game/GameComponent'

const HamePage: FC = () => {
    return (
        <Wrapper>
            <GameComponent></GameComponent>
        </Wrapper>
    )
}

export default HamePage
