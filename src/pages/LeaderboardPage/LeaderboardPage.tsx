import React, { FC, useEffect } from 'react'
import Container from '../../components/container/container'
import {
    BoardAvaStyled,
    BoardItemStyled,
    BoardUserValueStyled,
    BoardStyled,
    TitleStyled,
    BoardUserInfoStyled
} from './LeaderboardPageStyled'

import Star from '../../images/icons/star.svg'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'

import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchLeaders } from '../../store/actions/leadersAction'
import defaultAvatar from '../../images/avatars/default.svg'
import { BASE_IMG_URL } from '../../utils/constants'

const LeaderboardPage: FC = () => {
    const leaders = useAppSelector((state) => state.leaders.leaders)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchLeaders())
    }, [])

    return (
        <Layout hasMenu>
            <Container direction="column">
                <Logo />
                <TitleStyled>Лидеры</TitleStyled>
                <BoardStyled>
                    {leaders.map((leader, i) => (
                        <BoardItemStyled key={leader.data?.id}>
                            <BoardUserInfoStyled>
                                <BoardAvaStyled>
                                    <img
                                        alt="avatar"
                                        src={
                                            leader.data?.avatar
                                                ? `${BASE_IMG_URL}/${leader.data?.avatar}`
                                                : defaultAvatar
                                        }/>
                                </BoardAvaStyled>
                                <span>
                                    {leader.data?.name || leader.data?.login}
                                </span>
                            </BoardUserInfoStyled>
                            <BoardUserValueStyled>
                                {i <= 2 && <img src={Star} alt="star" />}
                                {leader.data?.baikonurScore?.toLocaleString(
                                    'ru-Ru'
                                )}
                            </BoardUserValueStyled>
                        </BoardItemStyled>
                    ))}
                </BoardStyled>
            </Container>
        </Layout>
    )
}

export default LeaderboardPage
