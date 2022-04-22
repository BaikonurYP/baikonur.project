import styled from 'styled-components'

export const ButtonFormStyled = styled.button`
    padding: 0 0 0 0;
    width: 300px;
    height: 37px;
    background: #4a3c55;
    border: 1px solid #ffffff;
    border-radius: 8px;
    font-family: 'SpaceFont';
    font-size: 16px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #2b2331;
    }

    &:active {
        transform: scale(0.98);
    }
`
