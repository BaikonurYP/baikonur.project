import styled, { css } from 'styled-components'
import { ButtonMainProps } from './buttonMain'

export const ButtonMainStyled = styled.button<ButtonMainProps>`
    padding: 0 0 0 0;
    width: 243px;
    height: 38px;
    background: var(--purple);
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: var(--purple-dark);
    }

    &:active {
        transform: scale(0.98);
    }

    ${({ color }) =>
        color === 'yellow' &&
        css`
            background: var(--yellow);
            color: var(--purple);

            &:hover {
                background: var(--yellow-dark);
            }
        `}
`
