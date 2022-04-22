import styled, { css } from 'styled-components'
import { ButtonMainProps } from './buttonMain'

export const ButtonMainStyled = styled.button<ButtonMainProps>`
    padding: 0 0 0 0;
    width: 243px;
    height: 38px;
    background: #4a3c55;
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #2b2331;
    }

    &:active {
        transform: scale(0.98);
    }

    ${({ color }) =>
        color === 'yellow' &&
        css`
            background: #ffcc00;
            color: #4a3c55;

            &:hover {
                background: #d1a700;
            }
        `}
`
