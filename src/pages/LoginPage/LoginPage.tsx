import React, { FC, useEffect } from 'react'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
    loginValidationChain,
    passwordValidationChain
} from '../../components/inputs/validators'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser, login } from '../../store/actions/userActions'

/** Страница логина */
const LoginPage: FC = () => {
    const history = useHistory()

    const goToGame = () => {
        history.push(`/game`)
    }

    const { user,loginMessage } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    useEffect(() => {
        if (user) {
            goToGame()
        }
    }, [user])

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: yup.object({
            login: loginValidationChain,
            password: passwordValidationChain
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            dispatch(login(values))
        }
    })

    return (
        <Layout hasMenu={false}>
            <Container direction="column">
                <Logo />
                <form onSubmit={formik.handleSubmit}>
                    <Container direction="column">
                        <br />
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
                            touched={formik.touched.login}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            helper={formik.errors.password}
                            state={
                                formik.errors.password &&
                                formik.touched.password
                                    ? 'danger'
                                    : 'default'
                            }
                            onBlur={formik.handleBlur}
                            touched={formik.touched.password}
                        />
                        <ButtonForm
                            helper={loginMessage?.text}
                            helperState={loginMessage?.type}
                        >
                            Войти
                        </ButtonForm>
                    </Container>
                </form>
            </Container>
        </Layout>
    )
}

export default LoginPage
