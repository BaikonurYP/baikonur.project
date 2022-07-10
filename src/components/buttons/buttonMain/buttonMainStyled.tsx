import styled, { css } from 'styled-components'
import { getColor } from '../../../styles/GlobalStyle/colors'
import { ButtonMainProps } from './buttonMain'

export const ButtonMainStyled = styled.button<ButtonMainProps>`
    padding: 0 0 0 0;
    width: 243px;
    height: 38px;
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

    ${({ color }) =>
        color === 'yellow'
        && css`
            background: ${getColor('yellow')};
            color: ${getColor('purple')};

            &:hover {
                background: ${getColor('yellow-dark')};
            }
        `}
`
