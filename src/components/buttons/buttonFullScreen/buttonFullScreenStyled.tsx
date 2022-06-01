import styled, { css } from 'styled-components'
import { getColor } from '../../../styles/GlobalStyle/colors'
import { ButtonFullScreenProps } from './buttonFullScreen'

export const ButtonFullScreenStyled = styled.div<ButtonFullScreenProps>`
    position: fixed;
    left: 20px;
    bottom: 20px;
    padding: 0 10px;
    height: 38px;
    align-items: center;
    display: flex;
    background: ${getColor('purple')};
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    color: ${getColor('white')};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${getColor('purple-dark')};
    }

    &:active {
        transform: scale(0.98);
    }
`
