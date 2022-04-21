import React, { FC } from 'react'
import styled from 'styled-components'

import '../../styles/main.scss'

export const Wrapper = styled.div`
    width: 60px;
    height: 50px;
    border: 1px solid black;
`

export const Per = styled.p`
    font-family: 'SpaceFont';
`

const App: FC = () => (
    <div>
        <Wrapper />
        <Per>Космический текст</Per>
        <h1>Мdwqdqwй апп.</h1>
    </div>
)
export default App
