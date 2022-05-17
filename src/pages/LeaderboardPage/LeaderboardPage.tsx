import React, { FC } from 'react'
import Container from '../../components/container/container'
import {
    BoardAvaStyled,
    BoardItemStyled,
    BoardUserValueStyled,
    BoardStyled,
    TitleStyled,
    BoardUserInfoStyled,
} from './LeaderboardPageStyled'

import Star from '../../images/icons/star.svg'
import Skin1 from '../../images/skins/plain_1.svg'
import Skin2 from '../../images/skins/plain_2.svg'
import Skin3 from '../../images/skins/plain_3.svg'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'

const leaders = [
    { id: 1, name: 'Уничтожитель 1', avatar: Skin1, value: 7896540 },
    { id: 2, name: 'Разрушитель', avatar: Skin2, value: 7896540 },
    { id: 3, name: 'Уничтожитель 2', avatar: Skin3, value: 7896540 },
    { id: 4, name: 'Уничтожитель', avatar: Skin1, value: 7896540 },
    { id: 5, name: 'Уничтожитель', avatar: Skin1, value: 7896540 },
]

const LeaderboardPage: FC = () => (
    <Layout hasMenu>
        <Container direction="column">
            <Logo />
            <TitleStyled>Лидеры</TitleStyled>
            <BoardStyled>
                {leaders.map((leader, i) => (
                    <BoardItemStyled key={leader.id}>
                        <BoardUserInfoStyled>
                            <BoardAvaStyled>
                                <img src={leader.avatar} alt={leader.name} />
                            </BoardAvaStyled>
                            <span>{leader.name}</span>
                        </BoardUserInfoStyled>
                        <BoardUserValueStyled>
                            {i <= 2 && <img src={Star} alt="star" />}
                            {leader.value.toLocaleString('ru-Ru')}
                        </BoardUserValueStyled>
                    </BoardItemStyled>
                ))}
            </BoardStyled>
        </Container>
    </Layout>
)

export default LeaderboardPage
