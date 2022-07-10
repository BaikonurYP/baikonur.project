import React, { FC } from 'react'
import { TooltipPosition, TooltipState, TooltipStyled } from './tooltipStyled'

interface TooltipProps {
    children?: React.ReactNode
    visible: boolean
    position?: TooltipPosition
    state?: TooltipState
}

const Tooltip: FC<TooltipProps> = (props) => (
    <TooltipStyled
        visibile={props.visible}
        position={props.position}
        state={props.state}>
        {props.children}
    </TooltipStyled>
)

export default Tooltip
