import React from 'react'
import styled from 'styled-components'
import { getColor } from '../../styles/GlobalStyle/colors'

export const CheckBoxWrapper = styled.div`
    position: relative;
`
export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: ${getColor('grey')};
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: ${getColor('purple')};
        box-shadow: 1px 3px 3px 1px ${getColor('black-20')};
        transition: 0.2s;
    }
`
export const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
        background: ${getColor('purple-light')};
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`
