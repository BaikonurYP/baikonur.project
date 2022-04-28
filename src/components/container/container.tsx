import React, { FC } from 'react'

import { ContainerStyled } from './containerStyled'
import Menu from "../menu/menu";

type ContainerProps = {
    children?: React.ReactNode
}

type Props = FC<ContainerProps>

const Container: Props = (props) => (
    <ContainerStyled>
        <Menu />
        {props.children}
    </ContainerStyled>
)

export default Container;
