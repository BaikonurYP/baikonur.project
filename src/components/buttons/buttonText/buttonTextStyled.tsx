import styled from 'styled-components'

export const ButtonTextStyled = styled.button`
    padding: 10px;
    background: var(--clear);
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    color: var(--white);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: var(--yellow);
    }
`
