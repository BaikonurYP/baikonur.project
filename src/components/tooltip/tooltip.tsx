import React from "react";
import { FC } from "react";
import { TooltipPosition, TooltipState, TooltipStyled } from "./tooltipStyled";

interface TooltipProps {
  children?: React.ReactNode
  visibility: boolean
  position?: TooltipPosition
  state?: TooltipState
}

const Tooltip: FC<TooltipProps> = (props) => {
  return (
      <TooltipStyled visibility={props.visibility} position={props.position} state={props.state}>{props.children}</TooltipStyled>
  )
}

export default Tooltip