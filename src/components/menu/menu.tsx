import React, { FC } from 'react'
import { toast, ToastOptions } from 'react-toastify'

import { useHistory } from 'react-router-dom'

import { MenuStyled } from './menuStyled'
import ButtonIcon from '../buttons/buttonIcon/buttonIcon'
import IconClose from '../../images/icons/menu-close.svg'
import IconProfile from '../../images/icons/menu-profile.svg'
import IconForum from '../../images/icons/menu-forum.svg'
import IconPlay from '../../images/icons/menu-play.svg'
import { authApi } from '../../core/http/api/AuthApi'

const menuItems = [
    // { title: 'Выход', icon: IconClose, path: '/logout' },
    { title: 'Профиль', icon: IconProfile, path: '/profile' },
    { title: 'Форум', icon: IconForum, path: '/forum' },
    { title: 'Игра', icon: IconPlay, path: '/home' }
]

const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined as any,
    theme: 'dark'
}

const Menu: FC = () => {
    const history = useHistory()

    const handleClick = (path: string) => {
        history.push(path)
    }

    function logOut() {
        authApi
            .logout()
            .then((res) => {
                localStorage.removeItem('isAuth')
                history.push('./login')
            })
            .catch((err) => {
                toast.error(`Ошибка: ${err.message}`, toastConfig)
            })
    }

    return (
        <MenuStyled>
            <ButtonIcon icon={IconClose} onClick={logOut} key="Выход">
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
        </MenuStyled>
    )
}

export default Menu
