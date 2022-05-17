import styled from 'styled-components'
import { getColor } from '../../../styles/GlobalStyle/colors'

export const ButtonTextStyled = styled.button`
    padding: 10px;
    background: ${getColor('clear')};
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    color: ${getColor('white')};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${getColor('yellow')};
    }
`
