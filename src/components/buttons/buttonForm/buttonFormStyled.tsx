import styled from 'styled-components'
import { getColor } from '../../../styles/GlobalStyle/colors'

export const ButtonContainerStyled = styled.div`
    position: relative;
`
export type ButtonSize = 'XS' | 'SM' | 'MD' | 'LG'

function getParamSize(init: number, size: ButtonSize): number {
    const sizesDict: Record<ButtonSize, number> = {
        XS: 0.5,
        SM: 0.75,
        MD: 1,
        LG: 2
    }

    return sizesDict[size ?? 'MD'] * init
}

export const ButtonFormStyled = styled.button<{ size?: ButtonSize }>`
    padding: 0 0 5px 0;
    width: ${(props) => getParamSize(300, props.size)}px;
    height: ${(props) => getParamSize(37, props.size)}px;
    background: ${getColor('purple')};
    border: 1px solid ${getColor('white')};
    border-radius: ${(props) => getParamSize(8, props.size)}px;
    font-family: 'SpaceFont';
    font-size: ${(props) => getParamSize(16, props.size)}px;
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

    .initial {
        font-weight: bolder;
        &.red {
            color: ${getColor('red-light')};
        }
    }
`
