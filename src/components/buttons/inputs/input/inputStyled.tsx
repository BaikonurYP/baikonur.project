import styled from 'styled-components'

export const Label = styled.label`
    position: relative;
`

export const InputStyled = styled.input`
    padding: 20px 7px 0;
    width: 280px;
    height: 50px;
    background-color: #ffffff00;
    border: none;
    outline: none;
    border-bottom: 2px solid #ffffff;
    font-family: 'Roboto';
    font-size: 13px;
    color: #ffffff;

    &::placeholder {
        font-family: 'Roboto';
        font-size: 13px;
        color: #ffffff;
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
    color: #e76969;
`
