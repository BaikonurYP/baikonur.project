import React, { FC } from 'react'
import Tooltip from '../../tooltip/tooltip'
import { TooltipPosition, TooltipState } from '../../tooltip/tooltipStyled'

import { ButtonContainerStyled, ButtonFormStyled } from './buttonFormStyled'

interface ButtonFormProps {
    children: string
    disabled?: boolean
    onClick: () => void
    helper?: string
    helperPosition?: TooltipPosition
    helperState?: TooltipState
}

const ButtonForm: FC<ButtonFormProps> = (props) => {
    return (
        <ButtonContainerStyled>
            <ButtonFormStyled type="submit" {...props}></ButtonFormStyled>
            {props.helper && (
                <Tooltip
                    visibility={props.helper.length != 0}
                    position={props.helperPosition}
                    state={props.helperState}
                >
                    {props.helper}
                </Tooltip>
            )}
        </ButtonContainerStyled>
    )
}

export default ButtonForm
