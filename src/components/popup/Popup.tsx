import React, { FC, ReactNode, useState } from 'react'

import {
    PopupWrapper,
    PopupContainer,
    PoputTitle,
    PopupBar
} from './PopupStyle'

interface IPopup {
    title: string
    isVisible: boolean
    children?: ReactNode
}

const Popup: FC<IPopup> = ({ title, isVisible, children }) => {
    const [test, setTest] = useState(1)
    return (
        <PopupWrapper isVisible={isVisible}>
            <PopupContainer>
                <PoputTitle>{title}</PoputTitle>
                <PopupBar>{children}</PopupBar>
            </PopupContainer>
        </PopupWrapper>
    )
}

export default Popup
