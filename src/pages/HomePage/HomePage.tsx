import React, { FC } from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
// @ts-ignore

const Wrapper = styled.div`
    padding: 20px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
`

const Form = styled.form`
    padding: 20px;
    width: 600px;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #648897b3;
`

const Label = styled.label``

const Input = styled.input`
    padding: 30px 7px 0;
    width: 280px;
    height: 50px;
    background-color: #ffffff00;
    border: none;
    outline: none;
    border-bottom: 2px solid #ffffff;
    font-family: 'Roboto';
    font-size: 13px;
    color: #ffffff;
`

import ButtonMain from '../../components/buttons/buttonMain/buttonMain'

const HamePage: FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
        },
        onSubmit: () => {
            console.log('dwq')
        },
    })

    function test() {
        console.log('21321')
    }
    return (
        <Wrapper>
            <Form>
                <Label>
                    <Input></Input>
                </Label>
            </Form>
        </Wrapper>
    )
}

export default HamePage
