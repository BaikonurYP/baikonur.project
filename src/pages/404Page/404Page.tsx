import React, { FC } from 'react'
import Container from '../../components/container/container'
import { TitleStyled, TextStyled, ImageStyled } from './404PageStyled'

import Image404 from '../../images/image404.png'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'

const Error404Page: FC = () => (
    <Layout>
        <Container direction="column">
            <Logo />
            <TitleStyled>404</TitleStyled>
            <TextStyled>
                ошибка
                <br />
к сожалению запрашиваемая страница не найдена
            </TextStyled>
            <ImageStyled>
                <img src={Image404} alt="404" />
            </ImageStyled>
        </Container>
    </Layout>
)

export default Error404Page
