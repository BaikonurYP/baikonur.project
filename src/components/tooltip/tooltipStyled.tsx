import styled from 'styled-components'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

export type TooltipState = 'default' | 'danger'

export const TooltipStyled = styled.span<{
    visibility: boolean
    position: TooltipPosition
    state?: TooltipState
}>`
    width: 200px;
    background-color: var(--purple);
    color: var(--white);
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding: 5px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;

    ${(props) => {
        switch (props.visibility) {
            case true:
                return `
                    visibility: visible;
                `
            default:
                return `
                    visibility: hidden;
                `
        }
    }}

    ${(props) => {
        switch (props.state) {
            case 'danger':
                return `
                    color: var(--red-light);
                `
            default:
                return `
                    color: var(--white);
                `
        }
    }}

    ${(props) => {
        switch (props.position) {
            case 'top':
                return `
                    bottom: 100%;
                    left: 50%;
                    margin-left: -100px; 
                    text-align: center;
                    margin-bottom: -10px;
                    &::after {
                        content: " ";
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: var(--purple) transparent transparent transparent;
                        
                    }`
            case 'bottom':
                return `
                    top: 100%;
                    left: 50%;
                    margin-left: -100px;
                    text-align: center;
                    margin-top: 10px;
                    &::after {
                        content: " ";
                        position: absolute;
                        bottom: 100%; 
                        left: 50%;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent var(--purple) transparent;
                    }`
            case 'left':
                return `
                    top: 50%;
                    right: 105%;
                    transform: translateY(-50%);
                    text-align: right;
                    &::after {
                        content: " ";
                        position: absolute;
                        top: 50%;
                        left: 100%;
                        margin-top: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent transparent var(--purple);
                    }`
            default:
                return `
                    top: 50%;
                    left: 105%;
                    transform: translateY(-50%);
                    text-align: left;
                    &::after {
                        content: " ";
                        position: absolute;
                        top: 50%;
                        right: 100%; 
                        margin-top: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent var(--purple) transparent transparent;
                    }`
        }
    }}
`
