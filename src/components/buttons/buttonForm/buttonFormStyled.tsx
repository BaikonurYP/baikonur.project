import styled from 'styled-components'
import { getColor } from '../../../styles/GlobalStyle/colors'

export const ButtonContainerStyled = styled.div`
    position: relative;
`

export const ButtonFormStyled = styled.button`
    padding: 0 0 5px 0;
    width: 300px;
    height: 37px;
    background: ${getColor('purple')};
    border: 1px solid ${getColor('white')};
    border-radius: 8px;
    font-family: 'SpaceFont';
    font-size: 16px;
    text-transform: uppercase;
    color: ${getColor('white')};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${getColor('purple-dark')};
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        opacity: 0.5;
        background: ${getColor('purple')};
    }
`
