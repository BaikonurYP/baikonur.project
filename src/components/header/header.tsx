import React from 'react'
import { FC } from 'react'
import Menu from '../menu/menu'
import { HeaderStyled } from './headerStyled'

type HeaderProps = {
    children?: React.ReactNode
}

type Props = FC<HeaderProps>

export const Header: Props = (props) => (
    <HeaderStyled>
        {props.children}
    </HeaderStyled>
)
