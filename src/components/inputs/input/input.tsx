import React, { FC } from 'react'

import { Label, InputStyled, ErrorText } from './inputStyled'

interface InputProps {
    type: string
    name: string
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<any>) => void
    onBlur: (e: any) => void
    touched: boolean
    errror: string
}

const Input: FC<InputProps> = (props) => {
    return (
        <Label>
            <InputStyled {...props}></InputStyled>
            {props.errror && <ErrorText>{props.errror}</ErrorText>}
        </Label>
    )
}

export default Input
