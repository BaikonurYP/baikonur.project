import React, { FC } from 'react'
import Tooltip from '../../tooltip/tooltip'
import { TooltipPosition } from '../../tooltip/tooltipStyled'

import { Label, InputStyled, InputState } from './inputStyled'

interface InputProps {
    type: string
    name: string
    placeholder?: string
    value: string
    state?: InputState
    onChange?: (e: React.ChangeEvent<any>) => void
    onBlur?: (e: any) => void
    onFocus?: (e: any) => void
    touched: boolean
    helperPosition?: TooltipPosition
    helper: string
}

const Input: FC<InputProps> = (props) => {
    return (
        <Label>
            <InputStyled state={props.state} {...props}></InputStyled>
            {props.helper && (
                <Tooltip
                    visibility={props.touched}
                    position={props.helperPosition}
                >
                    {props.helper}
                </Tooltip>
            )}
        </Label>
    )
}

export default Input
