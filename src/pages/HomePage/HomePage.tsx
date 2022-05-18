import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

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
import { Layout } from '../../components/layout/layout'

const skins = [
    { title: 'Зеленый гоблин', skin: Skin1 },
    { title: 'Красная жара', skin: Skin2 },
    { title: 'Смурфик', skin: Skin3 },
    { title: 'Желтый карлик', skin: Skin4 },
]

const userName = 'Великий уравнитель'

<<<<<<< HEAD
const HomePage: FC = () => {
    const history = useHistory()

    function toGame() {
        history.push('/game')
    }

    return (
        <Container>
=======
const HomePage: FC = () => (
    <Layout hasMenu>
        <Container direction="column">
>>>>>>> main
            <HomeTitleStyled>Привет, {userName}</HomeTitleStyled>
            <HomeTextStyled>
                выберите корабль, которым будете играть
            </HomeTextStyled>
            <HomeSkinsStyled>
                {skins.map((skin) => (
                    <SkinWrapStyled key={skin.title}>
<<<<<<< HEAD
                        <SkinAvaStyled onClick={toGame}>
=======
                        <SkinAvaStyled>
>>>>>>> main
                            <img src={skin.skin} alt="" />
                        </SkinAvaStyled>
                        <SkinNameStyled>{skin.title}</SkinNameStyled>
                    </SkinWrapStyled>
                ))}
            </HomeSkinsStyled>
        </Container>
<<<<<<< HEAD
    )
}
=======
    </Layout>
)
>>>>>>> main

export default HomePage
