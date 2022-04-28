import React, { FC } from 'react'

import { useHistory } from "react-router-dom";

import { MenuStyled } from './menuStyled'
import ButtonIcon from "../buttons/buttonIcon/buttonIcon";
import IconClose from '../../images/icons/menu-close.svg'
import IconProfile from '../../images/icons/menu-profile.svg'
import IconForum from '../../images/icons/menu-forum.svg'
import IconPlay from '../../images/icons/menu-play.svg'
import * as path from "path";


const menuItems = [
    { title: 'Выход', icon: IconClose, path: '/logout' },
    { title: 'Профиль', icon: IconProfile, path: '/profile' },
    { title: 'Форум', icon: IconForum, path: '/forum' },
    { title: 'Игра', icon: IconPlay, path: '/game' }
]


const Menu: FC = () => {
    const history = useHistory();

    const handleClick = (path: string) => {
        history.push(path);
    }

    return (
        <MenuStyled>
            {menuItems.map(item => (
                <ButtonIcon icon={item.icon} onClick={() => handleClick(item.path)}>
                    {item.title}
                </ButtonIcon>
            ))}
        </MenuStyled>)}

export default Menu
