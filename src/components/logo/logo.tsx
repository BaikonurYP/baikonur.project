import React, { FC } from 'react'
import Menu from '../menu/menu'
import { LogoStyled } from './logoStyled'

type LogoProps = {
    children?: React.ReactNode
}

type Props = FC<LogoProps>

export const Logo: Props = (props) => (
    <LogoStyled>
        <div>Space</div>
        invaders
    </LogoStyled>
)
