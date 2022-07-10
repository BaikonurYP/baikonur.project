import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../store/hooks/useAppHooks'
import { changeSkin, changeSkinSuccess } from '../../store/actions/SkinAction'

import Container from '../../components/container/container'
import {
    HomeSkinsStyled,
    HomeTextStyled,
    HomeTitleStyled,
    SkinWrapStyled,
    SkinAvaStyled,
    SkinNameStyled
} from './HomePageStyled'

import Skin1 from '../../images/skins/plain_1.svg'
import Skin2 from '../../images/skins/plain_2.svg'
import Skin3 from '../../images/skins/plain_3.svg'
import Skin4 from '../../images/skins/plain_4.svg'
import { Layout } from '../../components/layout/layout'
import { oAuthRequest } from '../../store/actions/userActions'

const skins = [
    { title: 'Зеленый гоблин', image: Skin1 },
    { title: 'Красная жара', image: Skin2 },
    { title: 'Смурфик', image: Skin3 },
    { title: 'Желтый карлик', image: Skin4 }
]

const userName = 'Великий уравнитель'

const HomePage: FC = () => {
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const history = useHistory()

    function toGame(image: string) {
        dispatch(changeSkinSuccess(image))
        history.push('/game')
    }

    useEffect(() => {
        const params = new URLSearchParams(document.location.search)
        const code = params.get('code')
        if (code) {
            dispatch(oAuthRequest(code))
        }
    }, [])

    return (
        <Layout hasMenu>
            <Container direction="column">
                <HomeTitleStyled>
                    Привет,
                    {' '}
                    {user?.first_name ?? 'коммандор'}
                </HomeTitleStyled>
                <HomeTextStyled>
                    выберите корабль, которым будете играть
                </HomeTextStyled>
                <HomeSkinsStyled>
                    {skins.map((skin, i) => (
                        <SkinWrapStyled
                            key={skin.image}
                            onClick={() => toGame(skin.image)}>
                            <SkinAvaStyled>
                                <img src={skin.image} alt="skin" />
                            </SkinAvaStyled>
                            <SkinNameStyled>{skin.title}</SkinNameStyled>
                        </SkinWrapStyled>
                    ))}
                </HomeSkinsStyled>
            </Container>
        </Layout>
    )
}

export default HomePage
