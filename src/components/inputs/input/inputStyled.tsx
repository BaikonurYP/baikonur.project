import styled, { css } from 'styled-components'

export const Label = styled.label`
    position: relative;
`

export type InputState = 'default' | 'danger'

export const InputStyled = styled.input<{ state: InputState }>`
    padding: 20px 7px 0;
    width: 280px;
    height: 50px;
    background-color: var(--clear);
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    ${(props) => {
        switch (props.state) {
            case 'danger':
                return `
                    color: var(--red-light);
                    border-bottom: 2px solid var(--red-light);
                `
            default:
                return `
                    color: var(--white);
                    border-bottom: 2px solid var(--white);
                `
        }
    }}

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        color: var(--white);
    }
`
