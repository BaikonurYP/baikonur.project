import React, { FC } from 'react'
import Container from '../../components/container/container'
import {
    BoardAvaStyled,
    BoardItemStyled,
    BoardUserValueStyled,
    BoardStyled,
    LogoStyled,
    TitleStyled,
    BoardUserInfoStyled,
} from './LeaderboardPageStyled'

import Star from '../../images/icons/star.svg'
import Skin1 from '../../images/skins/plain_1.svg'
import Skin2 from '../../images/skins/plain_2.svg'
import Skin3 from '../../images/skins/plain_3.svg'

const leaders = [
    { name: 'Уничтожитель 1', avatar: Skin1, value: 7896540 },
    { name: 'Разрушитель', avatar: Skin2, value: 7896540 },
    { name: 'Уничтожитель 2', avatar: Skin3, value: 7896540 },
    { name: 'Уничтожитель', avatar: Skin1, value: 7896540 },
    { name: 'Уничтожитель', avatar: Skin1, value: 7896540 },
]

const LeaderboardPage: FC = () => (
    <Container>
        <LogoStyled>
            Space
            <br />
            invaders
        </LogoStyled>
        <TitleStyled>Лидеры</TitleStyled>
        <BoardStyled>
            {leaders.map((leader, i) => (
                <BoardItemStyled>
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
)

export default LeaderboardPage
