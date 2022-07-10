import React, { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import Menu from '../menu/menu'
import { LayoutStyled } from './layoutStyled'

type LayoutProps = {
    children?: React.ReactNode
    hasMenu?: boolean
}

type Props = FC<LayoutProps>

export const Layout: Props = (props) => (
    <LayoutStyled>
        <ToastContainer />
        {props.hasMenu && <Menu />}
        {props.children}
    </LayoutStyled>
)
