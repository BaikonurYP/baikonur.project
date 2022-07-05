import React, { FC } from 'react'

import { ButtonMainStyled } from './buttonMainStyled'

export interface ButtonMainProps {
    children: string
    onClick?: () => void
    color?: string
    type: 'button' | 'submit' | 'reset'
}

const ButtonMain: FC<ButtonMainProps> = (props) => {
    const { type = 'button' } = props
    return <ButtonMainStyled {...props} type={type} />
}

export default ButtonMain
