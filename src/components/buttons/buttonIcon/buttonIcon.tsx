import React, { FC } from 'react'

import { Wrapper, Title, Container } from './buttonIconStyled'

interface ButtonIconProps {
    children: string
    icon: string
    onClick: () => void
}

const ButtonIcon: FC<ButtonIconProps> = (props) => (
    <Wrapper onClick={props.onClick} {...props}>
        <Title>{props.children}</Title>
        <Container icon={props.icon} />
    </Wrapper>
)

export default ButtonIcon
