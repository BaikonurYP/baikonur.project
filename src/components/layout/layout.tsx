import React from "react"
import { FC } from "react"
import { Logo } from "../logo/logo"
import Menu from "../menu/menu"
import { LayoutStyled } from "./layoutStyled"

type LayoutProps = {
  children?: React.ReactNode
  hasMenu?: boolean
}

type Props = FC<LayoutProps>

export const Layout: Props = (props) => (
  <LayoutStyled>
    {props.hasMenu && (
      <Menu />
    )}
    {props.children}
  </LayoutStyled>
)