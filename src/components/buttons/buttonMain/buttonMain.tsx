import React, { FC } from 'react'

import { ButtonMainStyled } from './buttonMainStyled'

export interface ButtonMainProps {
    children: string
    type: 'button' | 'submit'
    onClick: () => void
    color?: string
}

const ButtonForm: FC<ButtonMainProps> = (props) => {
    return <ButtonMainStyled {...props}></ButtonMainStyled>
}

export default ButtonForm
