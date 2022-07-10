import styled, { css } from 'styled-components'
import { boolean } from 'yup'

interface PopupWrapperProps {
    isVisible: boolean
}

export const PopupWrapper = styled.div<PopupWrapperProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(74, 60, 85, 0.8);
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;

    ${({ isVisible }) =>
        isVisible
        && css`
            visibility: visible;
            opacity: 1;
        `}
`

export const PopupContainer = styled.div`
    width: 550px;
    height: 370px;
    background: var(--purple);
    border: 5px solid var(--white);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const PoputTitle = styled.h2`
    margin: 10px 0 0 0;
    padding: 0;
    font-family: 'SpaceFont';
    font-weight: 400;
    font-size: 60px;
    color: var(--white);
    text-transform: uppercase;
    word-spacing: 9999px;
    text-align: center;
`

export const PopupBar = styled.div`
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
