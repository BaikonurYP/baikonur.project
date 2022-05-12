import React, { FC } from 'react'

import { ContainerContentAlign, ContainerCrossAxisAlign, ContainerDirection, ContainerMineAxisAlign, ContainerStyled } from './containerStyled'

type ContainerProps = {
    children?: React.ReactNode,
    /** Направление контейнера */
    direction?: ContainerDirection,
    /** Выравнивание по основной оси */
    mineAxisAlign?: ContainerMineAxisAlign,
    /** Выравнивание по перекрёcной оси */
    crossAxisAlign?: ContainerCrossAxisAlign,
    /** Выравнивание контента  */
    contentAlign?: ContainerContentAlign
}

type Props = FC<ContainerProps>

const Container: Props = (props) => (
    <ContainerStyled direction={props.direction} mineAxisAlign={props.mineAxisAlign} crossAxisAlign={props.crossAxisAlign} contentAlign={props.contentAlign}>
        {props.children}
    </ContainerStyled>
)

export default Container
