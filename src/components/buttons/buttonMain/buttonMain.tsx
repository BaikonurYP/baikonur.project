import React, { FC } from 'react'

import { ButtonMainStyled } from './buttonMainStyled'

export interface ButtonMainProps {
    children: string
    onClick: () => void
    color?: string
}

const ButtonMain: FC<ButtonMainProps> = (props) => {
    return <ButtonMainStyled {...props} type="button"></ButtonMainStyled>
}

export default ButtonMain
