import React, { FC } from 'react'

import { ButtonContainerStyled, ButtonFormStyled } from './buttonFormStyled'

interface ButtonFormProps {
    children?: string
    disabled?: boolean
    onClick?: () => void
    helper?: string
}

const ButtonForm: FC<ButtonFormProps> = (props) => {
    return (
        <ButtonContainerStyled>
            <ButtonFormStyled type="submit" {...props}></ButtonFormStyled>
        </ButtonContainerStyled>
    )
}

export default ButtonForm
