import React, { FC } from 'react'

import { ButtonFormErrorStyled, ButtonFormStyled } from './buttonFormStyled'

interface ButtonFormProps {
    children: string
    disabled?: boolean
    onClick: () => void
    error?: string
}

const ButtonForm: FC<ButtonFormProps> = (props) => {
    return (
        <>
            <ButtonFormStyled type="submit" {...props}></ButtonFormStyled>
            {props.error && (
                <ButtonFormErrorStyled>{props.error}</ButtonFormErrorStyled>
            )}
        </>
    )
}

export default ButtonForm
