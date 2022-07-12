import { Formik, useFormik } from 'formik'
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import {
    emailValidationChain,
    loginValidationChain,
    nameValidationChain,
    passwordValidationChain,
    phoneValidationChain
} from '../../components/inputs/validators'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser, signUp } from '../../store/actions/userActions'
import { Form } from 'components/form/form'

/** Страница регистрации */
const SignupPage: FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const goToLogin = (e?: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        history.push(`/login`)
    }

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: ''
        },
        validationSchema: yup.object({
            login: loginValidationChain,
            password: passwordValidationChain,
            first_name: nameValidationChain,
            second_name: nameValidationChain,
            email: emailValidationChain,
            phone: phoneValidationChain
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            dispatch(signUp(values))
        }
    })

    return (
        <Layout hasMenu={false}>
            <Container direction="column">
                <Logo />

                <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                    <Container direction="column">
                        <br />
                        <Container mineAxisAlign="between" width={70}>
                            <Input
                                type="text"
                                name="login"
                                placeholder="Логин"
                                value={formik.values.login}
                                onChange={formik.handleChange}
                                helper={formik.errors.login}
                                state={
                                    formik.errors.login && formik.touched.login
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.login}/>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                helper={formik.errors.password}
                                state={
                                    formik.errors.password
                                    && formik.touched.password
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.password}/>
                        </Container>

                        <Container mineAxisAlign="between" width={70}>
                            <Input
                                type="text"
                                name="first_name"
                                placeholder="Имя"
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                                helper={formik.errors.first_name}
                                state={
                                    formik.errors.first_name
                                    && formik.touched.first_name
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.first_name}/>
                            <Input
                                type="text"
                                name="second_name"
                                placeholder="Фамилия"
                                value={formik.values.second_name}
                                onChange={formik.handleChange}
                                helper={formik.errors.second_name}
                                state={
                                    formik.errors.second_name
                                    && formik.touched.second_name
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.second_name}/>
                        </Container>

                        <Container mineAxisAlign="between" width={70}>
                            <Input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                helper={formik.errors.phone}
                                state={
                                    formik.errors.phone && formik.touched.phone
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.phone}/>
                            <Input
                                type="text"
                                name="email"
                                placeholder="EMail"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                helper={formik.errors.email}
                                state={
                                    formik.errors.email && formik.touched.email
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.email}/>
                        </Container>

                        <ButtonForm>Зарегистрироваться</ButtonForm>
                    </Container>
                </form>
                <Form onSubmit={goToLogin}>
                    <Container direction="column">
                        <ButtonForm size="SM">
                            Логин
                        </ButtonForm>
                    </Container>
                </Form>
            </Container>
        </Layout>
    )
}

export default SignupPage
