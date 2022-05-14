import styled from 'styled-components'
import { getColor } from '../../styles/GlobalStyle/colors'

export const HomeTitleStyled = styled.div`
    font-size: 40px;
    font-family: 'SpaceFont';
    color: ${getColor('white')};
    text-transform: uppercase;
    margin-bottom: 60px;
`
export const HomeTextStyled = styled.p`
    font-size: 24px;
    font-family: 'Roboto';
    margin-bottom: 70px;
    text-align: center;
    color: ${getColor('white')};
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
    color: ${getColor('white')};
    &:hover {
        cursor: pointer;
        color: ${getColor('blue-light')};
    }
    &:hover > div:first-of-type {
        outline: 4px solid ${getColor('blue-light')};
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
