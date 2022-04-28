import styled from 'styled-components'

export const HomeTitleStyled = styled.div`
    font-size: 40px;
    font-family: 'SpaceFont';
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 60px;
`
export const HomeTextStyled = styled.p`
    font-size: 24px;
    font-family: 'Roboto';
    margin-bottom: 70px;
    text-align: center;
    color: var(--white);
`
export const HomeSkinsStyled = styled.div`
    width: 800px;
    padding: 30px;
    margin-bottom: 35px;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
`
export const SkinWrapStyled = styled.div`
    width: 150px;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: var(--white);
    &:hover {
        cursor: pointer;
        color: var(--blue-light);
    }
    &:hover > div:first-of-type {
        outline: 4px solid var(--blue-light);
    }
`
export const SkinAvaStyled = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 75px;
    img {
        width: 100px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
`
export const SkinNameStyled = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'SpaceFont';
    text-align: center;
`
