import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    margin: 0;
    padding: 0 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const LevelTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-family: 'SpaceFont';
    text-transform: uppercase;
    color: var(--yellow);
`

export const Bar = styled.div`
    margin: 5px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`

export const LiveContainer = styled.div`
    display: flex;
`

export const Live = styled.img`
    margin: 0 5px;
    width: 32px;
    height: 25px;
`

export const Points = styled(LevelTitle)`
    margin: 0;
    color: var(--white);
`

export const CanvasStyled = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    z-index: -1;
`
