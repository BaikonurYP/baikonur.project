import styled from 'styled-components'

/** Направление контейнера */
export type ContainerDirection =
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'

/** Выравнивание по основной оси */
export type ContainerMineAxisAlign =
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'

/** Выравнивание по перекрёcной оси */
export type ContainerCrossAxisAlign = 'start' | 'center' | 'end' | 'stretch'

/** Выравнивание контента  */
export type ContainerContentAlign = ContainerMineAxisAlign

export const ContainerStyled = styled.div<{
    direction?: ContainerDirection
    mineAxisAlign?: ContainerMineAxisAlign
    crossAxisAlign?: ContainerCrossAxisAlign
    contentAlign?: ContainerContentAlign
    width?: number
}>`
    display: flex;
    width: ${(props) => props.width ?? 100}%;
    flex-direction: ${props => props.direction ?? 'row'}

    ${(props) => {
        switch (props.mineAxisAlign) {
            case 'start':
                return 'justify-content: flex-start;'
            case 'end':
                return 'justify-content: flex-end;'
            case 'between':
                return 'justify-content: space-between;'
            case 'around':
                return 'justify-content: space-around;'
            case 'evenly':
                return 'justify-content: space-evenly;'
            default:
                return 'justify-content: center;'
        }
    }}

    ${(props) => {
        switch (props.crossAxisAlign) {
            case 'start':
                return 'align-items: flex-start;'
            case 'end':
                return 'align-items: flex-end;'
            case 'stretch':
                return 'align-items: stretch;'
            default:
                return 'align-items: center;'
        }
    }}

    ${(props) => {
        switch (props.contentAlign) {
            case 'start':
                return 'align-content: flex-start;'
            case 'end':
                return 'align-content: flex-end;'
            case 'between':
                return 'align-content: space-between;'
            case 'around':
                return 'align-content: space-around;'
            case 'evenly':
                return 'align-content: space-evenly;'
            default:
                return 'align-content: center;'
        }
    }}
`
