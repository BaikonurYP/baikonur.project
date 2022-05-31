import React, { FC } from 'react'
import Container from '../../components/container/container'
import {
    TitleStyled,
    TextStyled,
    ImageStyled,
} from '../404Page/404PageStyled'

import Image500 from '../../images/image500.png'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'

const Error404Page: FC = () => (
    <Layout>
        <Container direction="column">
            <Logo />
            <TitleStyled>500</TitleStyled>
            <TextStyled>
                внутрення ошибка сервера
                мы скоро все исправим
            </TextStyled>
            <ImageStyled>
                <img src={Image500} alt="500"/>
            </ImageStyled>
        </Container>
    </Layout>
)

export default Error404Page
