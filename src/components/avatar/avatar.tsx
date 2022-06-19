import React, { FC } from 'react'
import { AvatarStyled } from './avatarStyled'
import defaultAvatar from '../../images/avatars/default.svg'
import { BASE_IMG_URL } from '../../utils/constants'

type AvatarProps = {
    url?: string
}

type Props = FC<AvatarProps>

export const Avatar: Props = (props) => (
    <AvatarStyled url={props.url}>
        <img src={props.url ? `${BASE_IMG_URL}/${props.url}` : defaultAvatar} />
    </AvatarStyled>
)
