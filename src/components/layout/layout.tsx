import React, { FC } from 'react'
import Menu from '../menu/menu'
import ButtonFullScreen from '../buttons/buttonFullScreen/buttonFullScreen'
import { LayoutStyled } from './layoutStyled'

type LayoutProps = {
    children?: React.ReactNode
    hasMenu?: boolean
}

type Props = FC<LayoutProps>

export const Layout: Props = (props) => (
    <LayoutStyled>
        <ButtonFullScreen />
        {props.hasMenu && <Menu />}
        {props.children}
    </LayoutStyled>
)
