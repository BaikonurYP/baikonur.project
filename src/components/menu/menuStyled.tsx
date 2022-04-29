import styled from 'styled-components'

export const MenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 20px;
    left: 20px;
    & > div {
        margin-right: 10px;
        &:last-of-type {
            margin-right: 0;
        }
    }
`
