import styled from 'styled-components'
import { getColor } from '../../styles/GlobalStyle/colors'

export const ForumWrapperStyled = styled.div`
    width: 1140px;
    padding: 30px;
    font-family: 'Roboto';
    background-color: ${getColor('purple-light')};
    color: ${getColor('white')};
    margin-top: 80px;
`
export const ForumTableStyled = styled.table`
    width: 100%;
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;
    font-size: 14px;
    tr {
        border-bottom: 1px solid ${getColor('purple-grey')};
        padding: 16px 0;
        td {
            padding: 16px 10px;
            cursor: pointer;
        }
        th {
            padding: 16px 10px;
            background-color: ${getColor('purple')};
            text-align: left;
        }
    }
`
export const ForumTitleWrapStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
`
export const ForumTitleStyled = styled.div`
    font-family: 'SpaceFont';
    font-size: 40px;
    text-transform: uppercase;
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
export const ForumAvaStyled = styled.div`
    width: 78px;
    height: 78px;
    border-radius: 39px;
    background-color: ${getColor('light-grey')};
    overflow: hidden;
    img {
        width: 70%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ForumBackStyled = styled.div`
    cursor: pointer;
    height: 45px;
    width: 45px;
`
export const ForumThemeTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`
export const ForumMessageStyled = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'SpaceFont';
    text-align: center;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`
export const ForumTextareaStyled = styled.textarea`
    border: 1px solid ${getColor('purple')};
    background-color: ${getColor('light-grey')};
    width: 100%;
    min-height: 100px;
    margin: 12px 0;
`
