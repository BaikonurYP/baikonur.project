import styled from 'styled-components'

export const ButtonFormStyled = styled.button`
    padding: 0 0 5px 0;
    width: 300px;
    height: 37px;
    background: var(--purple);
    border: 1px solid var(--white);
    border-radius: 8px;
    font-family: 'SpaceFont';
    font-size: 16px;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: var(--purple-dark);
    }

    &:active {
        transform: scale(0.98);
    }
`
