import React, { FC } from 'react'

import {
    ButtonContainerStyled,
    ButtonFormStyled,
    ButtonSize
} from './buttonFormStyled'

interface ButtonFormProps {
    children?: React.ReactNode
    disabled?: boolean
    onClick?: () => void
    size?: ButtonSize
}

const ButtonForm: FC<ButtonFormProps> = (props) => (
    <ButtonContainerStyled>
        <ButtonFormStyled type="submit" {...props} />
    </ButtonContainerStyled>
)

export default ButtonForm
