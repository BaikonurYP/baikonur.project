import React, { FC } from 'react'
import { HeaderStyled } from './headerStyled'

type HeaderProps = {
    children?: React.ReactNode
}

type Props = FC<HeaderProps>

export const Header: Props = (props) => (
    <HeaderStyled>{props.children}</HeaderStyled>
)
