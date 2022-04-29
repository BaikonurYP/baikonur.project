import styled from 'styled-components'

export const ForumWrapperStyled = styled.div`
    width: 1140px;
    padding: 30px;
    font-family: 'Roboto';
    background-color: var(--purple-light);
    color: var(--white);
    margin-top: 80px;
`
export const ForumTableStyled = styled.table`
    width: 100%;
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;
    font-size: 14px;
    tr {
        border-bottom: 1px solid var(--purple-grey);
        padding: 16px 0;
        td {
            padding: 16px 10px;
            cursor: pointer;
        }
      th {
        padding: 16px 10px;
        background-color: var(--purple);
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
    color: var(--white);
    &:hover {
        cursor: pointer;
        color: var(--blue-light);
    }
    &:hover > div:first-of-type {
        outline: 4px solid var(--blue-light);
    }
`
export const ForumAvaStyled = styled.div`
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
