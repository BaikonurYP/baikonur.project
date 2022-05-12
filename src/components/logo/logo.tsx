import React from "react"
import { FC } from "react"
import Menu from "../menu/menu"
import { LogoStyled } from "./logoStyled"

type LogoProps = {
  children?: React.ReactNode
}

type Props = FC<LogoProps>

export const Logo: Props = (props) => (
  <LogoStyled>
    Space
    <br />
    invaders
  </LogoStyled>
)