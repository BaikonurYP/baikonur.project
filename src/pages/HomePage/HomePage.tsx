import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
`

import Game from '../../components/game/game'

const HamePage: FC = () => {
    return (
        <Wrapper>
            <Game></Game>
        </Wrapper>
    )
}

export default HamePage
