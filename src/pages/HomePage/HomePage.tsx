import React, { FC } from 'react'
import Container from '../../components/container/container'
import {
    HomeSkinsStyled,
    HomeTextStyled,
    HomeTitleStyled,
    SkinWrapStyled,
    SkinAvaStyled,
    SkinNameStyled,
} from './HomePageStyled'

import Skin1 from '../../images/skins/plain_1.svg'
import Skin2 from '../../images/skins/plain_2.svg'
import Skin3 from '../../images/skins/plain_3.svg'
import Skin4 from '../../images/skins/plain_4.svg'

const skins = [
    { title: 'Зеленый гоблин', skin: Skin1 },
    { title: 'Красная жара', skin: Skin2 },
    { title: 'Смурфик', skin: Skin3 },
    { title: 'Желтый карлик', skin: Skin4 },
]

const userName = 'Великий уравнитель'

const HomePage: FC = () => (
    <Container>
        <HomeTitleStyled>Привет, {userName}</HomeTitleStyled>
        <HomeTextStyled>выберите корабль, которым будете играть</HomeTextStyled>
        <HomeSkinsStyled>
            {skins.map((skin) => (
                <SkinWrapStyled key={skin.title}>
                    <SkinAvaStyled>
                        <img src={skin.skin} alt="" />
                    </SkinAvaStyled>
                    <SkinNameStyled>{skin.title}</SkinNameStyled>
                </SkinWrapStyled>
            ))}
        </HomeSkinsStyled>
    </Container>
)

export default HomePage
