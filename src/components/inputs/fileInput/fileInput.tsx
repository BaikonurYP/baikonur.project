import React, { FC, useState } from 'react'
import { TooltipPosition } from '../../tooltip/tooltipStyled'
import { InpurErrorStyle } from '../input/inputStyled'
import { FileInputInputStyled, FileInputLabelStyled } from './fileInputStyled'
import { v4 as uuidv4 } from 'uuid'

interface InputProps {
    children: string
    name: string
    value?: File | null
    onChange?: (e: React.ChangeEvent<any>) => void
    onBlur?: (e: any) => void
    touched?: boolean
    helperPosition?: TooltipPosition
    helper?: string
    accept?: string
}

const FileInput: FC<InputProps> = (props) => {
    const [uuid, setUUid] = useState(uuidv4())

    return (
        <>
            <FileInputLabelStyled htmlFor={uuid}>
                {props.children}
            </FileInputLabelStyled>
            <FileInputInputStyled
                accept={props.accept}
                onChange={props.onChange}
                type="file"
                name={props.name}
                id={uuid}
            />
            {props.touched && props.helper && (
                <InpurErrorStyle>{props.helper}</InpurErrorStyle>
            )}
        </>
    )
}

export default FileInput
