import styled from 'styled-components'

export const BoardStyled = styled.div`
    background-color: var(--white-30);
    width: 800px;
    padding: 30px;
    margin-bottom: 35px;
`
export const BoardItemStyled = styled.div`
    border-radius: 6px;
    border: 3px solid var(--yellow);
    padding: 6px 18px;
    font-size: 24px;
    display: flex;
    color: var(--white);
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    background-color: var(--purple);
    font-family: 'Roboto';
    margin-bottom: 24px;
    &:last-of-type {
        margin-bottom: 0;
    }
`
export const BoardUserInfoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const BoardAvaStyled = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    background-color: var(--purple-grey);
    display: flex;
    align-content: center;
    justify-content: center;
    margin-right: 20px;
    img {
        width: 44px;
    }
`
export const BoardUserValueStyled = styled.div`
    color: var(--yellow);
    display: flex;
    img {
        margin-right: 10px;
    }
`
export const TitleStyled = styled.div`
    font-size: 40px;
    font-family: 'SpaceFont';
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 30px;
`
