import styled, { css } from 'styled-components'
import { colors, getColor } from '../../../styles/GlobalStyle/colors'

export const Label = styled.label`
    position: relative;
    height: 75px;
`

export type InputState = 'default' | 'danger'

function getInputColor(state: InputState) {
    const input_colors: Record<InputState, keyof typeof colors> = {
        default: 'white',
        danger: 'red-light'
    }
    return input_colors[state] || 'white'
}

export const InputStyled = styled.input<{ state: InputState }>`
    padding: 0px 7px 0;
    width: 280px;
    height: 30px;
    background-color: ${getColor('clear')};
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: ${(props) => getColor(getInputColor(props.state))};
    border-bottom: 2px solid ${(props) => getColor(getInputColor(props.state))};

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        color: ${getColor('white')};
    }
`

export const InpurErrorStyle = styled.span`
    color: ${getColor('red-light')};
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 40px;
    right: 0px;
    width: 280px;
    padding-left: 7px;
    font-weight: bold;
`
