import styled from 'styled-components'
import { getColor } from '../../styles/GlobalStyle/colors'
import defaultAvatar from '../../images/avatars/default.svg'

export const AvatarStyled = styled.div<{ url?: string }>`
    height: 0;
    width: 100%;
    padding-bottom: 93%;
    border-radius: 10%;
    border: 3px solid ${getColor('white')};
    overflow: hidden;

    img{
        max-width: 100%;
    }
`
