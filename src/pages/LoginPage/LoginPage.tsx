import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useFormik, Field } from 'formik'
import * as yup from 'yup'

import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Input from '../../components/inputs/input/input'

import bgImg from '../../images/bg.jpg'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bgImg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Title = styled.h2`
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-family: 'SpaceFont';
    font-size: 40px;
    text-align: center;
    color: var(--white);
`

export const Form = styled.form`
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const FormBtn = styled(ButtonForm)`
    margin: 40px 0 0 0;
`

const LoginPage: FC = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: yup.object({
            login: yup.string().required('Required'),
            password: yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    function test() {}

    return (
        <Wrapper>
            <Container>
                <Title>Space Invaders</Title>
                <Form onSubmit={formik.handleSubmit}>
                    <Input
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value={formik.values.login}
                        onChange={formik.handleChange}
                        errror={formik.errors.login}
                        onBlur={formik.handleBlur}
                        touched={formik.touched.login}
                    />
                    <Input
                        type="text"
                        name="password"
                        placeholder="Пароль"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        errror={formik.errors.password}
                        onBlur={formik.handleBlur}
                        touched={formik.touched.password}
                    />
                    <FormBtn onClick={formik.handleSubmit}>Войти</FormBtn>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default LoginPage
