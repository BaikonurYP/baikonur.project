import React from 'react'
import { FC } from 'react'
import { FormStyled } from './formStyled'

type FormProps = {
    children?: React.ReactNode,
    onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
    ref?: React.MutableRefObject<HTMLFormElement>
}

type Props = FC<FormProps>

export const Form: Props = (props) => (
    <FormStyled {...props}>{props.children}</FormStyled>
)
