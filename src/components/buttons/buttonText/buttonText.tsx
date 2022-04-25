import React, { FC } from 'react'

import { ButtonTextStyled } from './buttonTextStyled'

interface ButtonTextProps {
    children: string
    onClick: () => void
}

const ButtonText: FC<ButtonTextProps> = (props) => {
    return <ButtonTextStyled type="button" {...props}></ButtonTextStyled>
}

export default ButtonText
