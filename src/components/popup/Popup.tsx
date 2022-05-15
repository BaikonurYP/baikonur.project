import React, { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

import {
    PopupWrapper,
    PopupContainer,
    PoputTitle,
    PopupBar
} from './PopupStyle'

interface IPopup {
    title: string
    onVisible: boolean
    children?: ReactNode
}

const Popup: FC<IPopup> = ({ title, onVisible, children }) => {
    const [test, setTest] = useState(1)
    return (
        <PopupWrapper onVisible={onVisible}>
            <PopupContainer>
                <PoputTitle>{title}</PoputTitle>
                <PopupBar>{children}</PopupBar>
            </PopupContainer>
        </PopupWrapper>
    )
}

export default Popup
