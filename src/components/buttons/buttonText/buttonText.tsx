import React, { FC } from 'react'

import { ButtonTextStyled } from './buttonTextStyled'

interface ButtonTextProps {
    children: string
    onClick: () => void
}

const ButtonText: FC<ButtonTextProps> = (props) => <ButtonTextStyled type="button" {...props} />

export default ButtonText
