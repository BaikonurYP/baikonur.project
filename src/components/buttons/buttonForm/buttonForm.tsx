import React, { FC } from 'react'

import { ButtonFormStyled } from './buttonFormStyled'

interface ButtonFormProps {
    children: string
    onClick: () => void
}

const ButtonForm: FC<ButtonFormProps> = (props) => {
    return <ButtonFormStyled type="submit" {...props}></ButtonFormStyled>
}

export default ButtonForm
