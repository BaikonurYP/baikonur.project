import React from 'react'
import { FC } from 'react'
import { AvatarStyled } from './avatarStyled'
import defaultAvatar from '../../images/avatars/default.svg'

type AvatarProps = {
    url?: string
}

type Props = FC<AvatarProps>

export const Avatar: Props = (props) => (
    <AvatarStyled url={props.url}>
        <img
            
            src={
                props.url
                    ? `https://ya-praktikum.tech/api/v2/resources/${props.url}`
                    : defaultAvatar
            }
        />
    </AvatarStyled>
)
