import styled from 'styled-components'
import { getColor } from '../../styles/GlobalStyle/colors'

export const LogoStyled = styled.div`
    font-size: 40px;
    font-family: 'SpaceFont';
    color: ${getColor('grey')};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 35px;
    div {
        text-align: center;
        font-size: 60px;
    }
`
