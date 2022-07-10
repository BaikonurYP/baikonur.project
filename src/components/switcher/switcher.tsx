import React, { FC } from 'react'
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './switcherStyled'

interface SwitcherProps {
    children?: React.ReactNode
    checked: boolean
    onChange?: () => void
}

const Switcher: FC<SwitcherProps> = ({ onChange, checked = false }) => {
    return (
        <div>
            <CheckBoxWrapper>
                <CheckBox
                    id="checkbox"
                    type="checkbox"
                    onChange={onChange}
                    checked={checked}
                />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </div>
    )
}

export default Switcher
