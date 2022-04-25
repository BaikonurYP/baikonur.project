import styled, { css } from 'styled-components'
import { ButtonMainProps } from './buttonMain'

const colors = {
    yellow: '#ffcc00',
    yellow_dark: '#d1a700',
    purple: '#4a3c55',
    purple_datk: '#2b2331',
}

export const ButtonMainStyled = styled.button<ButtonMainProps>`
    padding: 0 0 0 0;
    width: 243px;
    height: 38px;
    background: ${colors.purple};
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${colors.purple_datk};
    }

    &:active {
        transform: scale(0.98);
    }

    ${({ color }) =>
        color === 'yellow' &&
        css`
            background: ${colors.yellow};
            color: ${colors.purple};

            &:hover {
                background: ${colors.yellow_dark};
            }
        `}
`
