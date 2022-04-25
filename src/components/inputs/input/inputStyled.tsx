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
    font-family: 'Roboto';
    font-size: 13px;
    color: var(--white);

    &::placeholder {
        font-family: 'Roboto';
        font-size: 13px;
        color: var(--white);
    }
`

export const ErrorText = styled.p`
    position: absolute;
    top: 100%;
    left: 7px;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 13px;
    color: var(--red-light);
`
