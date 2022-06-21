import * as React from 'react'
import { FC, useState } from 'react'
import { ButtonFullScreenStyled } from './buttonFullScreenStyled'

export interface ButtonFullScreenProps {
    onClick?: () => void
}

const ButtonFullScreen: FC<ButtonFullScreenProps> = (props) => {
    const [isFullScreen, setFullScreen] = useState(false)

    const deactivateFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
                setFullScreen(false)
            })
        }
    }

    const activateFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().then(() => {
                setFullScreen(true)
            })
        }
    }

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            activateFullscreen()
        } else {
            deactivateFullscreen()
        }
    }

    return (
        <ButtonFullScreenStyled onClick={toggleFullScreen}>
            {isFullScreen ? 'Свернуть' : 'Развернуть'}
        </ButtonFullScreenStyled>
    )
}

export default ButtonFullScreen
