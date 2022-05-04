import React, { FC } from 'react'

import { ContainerStyled, LogoStyled } from './containerStyled'
import Menu from '../menu/menu'

type ContainerProps = {
    children?: React.ReactNode
    has_logo?: boolean
}

type Props = FC<ContainerProps>

const Container: Props = (props) => (
    <ContainerStyled>
        <Menu />
        {props.has_logo && (
            <LogoStyled>
                Space
                <br />
                invaders
            </LogoStyled>
        )}
        {props.children}
    </ContainerStyled>
)

export default Container
