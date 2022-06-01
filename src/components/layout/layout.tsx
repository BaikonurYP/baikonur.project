import React from 'react'
import { FC } from 'react'
import Menu from '../menu/menu'
import { LayoutStyled } from './layoutStyled'
import { ToastContainer } from 'react-toastify'

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
