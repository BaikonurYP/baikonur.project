import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const ButtonMainStyled = styled.button`
    padding: 0 0 0 0;
    width: 300px;
    height: 37px;
    background: #4a3c55;
    border: 1px solid #ffffff;
    border-radius: 8px;
    font-family: 'SpaceFont';
    font-size: 16px;
    text-transform: uppercase;
    color: #ffffff;
`
interface ButtonMailProps {
    children: ReactNode
}

/* eslint-disable */

const ButtonMain: FC<ButtonMailProps> = ({ children }) => {
    return <ButtonMainStyled type="submit">{children}</ButtonMainStyled>
}

export default ButtonMain
