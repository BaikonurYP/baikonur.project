import styled from "styled-components";
import BGImage from '../../images/bg.jpg'

export const ContainerStyled = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: url(${BGImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
`