import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &:hover div {
        box-shadow: 0px 0px 10px 0px #1884b4;
    }
`
export const Title = styled.p`
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 8px;
    color: #ffffff;
    text-transform: uppercase;
`

interface ContainerProps {
    icon?: string
}

export const Container = styled.div<ContainerProps>`
    margin: 4px 0 0 0;
    width: 33px;
    height: 33px;
    border: 2px solid #1884b4;
    border-radius: 3px;
    background-size: 60%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: 0.3s;
    ${({ icon }) =>
        icon &&
        css`
            background-image: url(${icon});
        `}
`
