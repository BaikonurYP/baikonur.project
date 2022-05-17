import React, { FC, useState } from 'react'
import { TooltipPosition } from '../../tooltip/tooltipStyled'
import { InpurErrorStyle } from '../input/inputStyled'
import { FileInputInputStyled, FileInputLabelStyled } from './fileInputStyled'

interface InputProps {
    children: string
    name: string
    value: []
    onChange?: (e: React.ChangeEvent<any>) => void
    onBlur?: (e: any) => void
    touched?: boolean
    helperPosition?: TooltipPosition
    helper?: string
}

const FileInput: FC<InputProps> = (props) => {
    const [uuid, setUUid] = useState('111')

    return (
        <>
            <FileInputLabelStyled htmlFor={uuid}>
                {props.children}
            </FileInputLabelStyled>
            <FileInputInputStyled type="file" id={uuid} />
            {props.touched && props.helper && (
                <InpurErrorStyle>{props.helper}</InpurErrorStyle>
            )}
        </>
    )
}

export default FileInput
