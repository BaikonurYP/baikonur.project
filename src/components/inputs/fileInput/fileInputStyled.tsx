import styled, { css } from 'styled-components'
import { colors, getColor } from '../../../styles/GlobalStyle/colors'

export const FileInputLabelStyled = styled.label`
    padding: 0 0 5px 0;
    width: 200px;
    height: 22px;
    background: ${getColor('purple')};
    border: 1px solid ${getColor('white')};
    border-radius: 8px;
    font-family: 'SpaceFont';
    font-size: 12px;
    text-transform: uppercase;
    color: ${getColor('white')};
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${getColor('purple-dark')};
    }

    &:active {
        transform: scale(0.98);
    }
`

export const FileInputInputStyled = styled.input`
    display: none;
`
