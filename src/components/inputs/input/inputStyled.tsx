import styled from 'styled-components'

export const Label = styled.label`
    position: relative;
`

export const InputStyled = styled.input`
    padding: 20px 7px 0;
    width: 280px;
    height: 50px;
    background-color: var(--clear);
    border: none;
    outline: none;
    border-bottom: 2px solid var(--white);
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: var(--white);

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        color: var(--white);
    }
`

export const ErrorText = styled.p`
    width: 280px;
    font-family: 'Roboto', sans-serif;
    color: var(--red-light);
    border: 1px solid var(--white);
    background: var(--purple);
    border-radius: 10px;
    padding: 7px;
    font-size: 10px;
`
