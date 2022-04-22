import React, { FC } from 'react'
import styled from 'styled-components'

/* eslint-disable */

const Wrapper = styled.div`
    width: 100%;
    height: 50vh;
    background-color: black;
`

import ButtonMain from '../buttons/buttonMain/buttonMain'

const App: FC = () => {
    return (
        <Wrapper>
            <ButtonMain>Привет</ButtonMain>
        </Wrapper>
    )
}
export default App
