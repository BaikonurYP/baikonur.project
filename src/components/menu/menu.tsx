import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { logOut } from '../../store/actions/userActions'

import { useHistory } from 'react-router-dom'

import { MenuStyled } from './menuStyled'
import ButtonIcon from '../buttons/buttonIcon/buttonIcon'
import IconClose from '../../images/icons/menu-close.svg'
import IconProfile from '../../images/icons/menu-profile.svg'
import IconForum from '../../images/icons/menu-forum.svg'
import IconPlay from '../../images/icons/menu-play.svg'
import IconLeaders from '../../images/icons/menu-leaders.svg'

const menuItems = [
    { title: 'Профиль', icon: IconProfile, path: '/profile' },
    { title: 'Форум', icon: IconForum, path: '/forum' },
    { title: 'Лидеры', icon: IconLeaders, path: '/leaderboard' },
    { title: 'Игра', icon: IconPlay, path: '/home' }
]

const Menu: FC = () => {
    const { user } = useAppSelector((state) => state.user)

    const dispatch = useAppDispatch()
    const history = useHistory()

    const handleClick = (path: string) => {
        history.push(path)
    }

    function logOutHandler() {
        dispatch(logOut())
    }

    return (
        <MenuStyled>
            {user && (
                <>
                    <ButtonIcon
                        icon={IconClose}
                        onClick={logOutHandler}
                        key="Выход"
                    >
                        Выход
                    </ButtonIcon>
                    {menuItems.map((item) => (
                        <ButtonIcon
                            icon={item.icon}
                            onClick={() => handleClick(item.path)}
                            key={item.title}
                        >
                            {item.title}
                        </ButtonIcon>
                    ))}
                </>
            )}
            {!user && (
                <ButtonIcon
                    icon={IconProfile}
                    onClick={() => handleClick('/login')}
                    key="Вход"
                >
                    Войти
                </ButtonIcon>
            )}
        </MenuStyled>
    )
}

export default Menu
