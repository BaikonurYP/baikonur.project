import React, { FC } from 'react'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { AuthApi } from '../../core/http/api/AuthApi'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import { useFormik } from 'formik'
import * as yup from 'yup'

const authApi = new AuthApi()

/** Страница логина */
const LoginPage: FC = () => {
    const history = useHistory()

    const goToGame = () => {
        history.push(`/game`)
    }

    /** Ошибка формы */
    const [formError, setFormError] = React.useState('')

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: yup.object({
            login: yup
                .string()
                .required('Поле обязательно для заполнения')
                .min(3, 'Минимальная длина - 3 символа')
                .matches(
                    /^[A-z0-9_-]{3,20}$/,
                    'Допускается латиница, цифры, дефис (-) и нижнее подчеркивание(_)'
                )
                .matches(/^.*[A-z]{1}.*$/, 'Должна быть как миним одна буква'),
            password: yup
                .string()
                .required('Поле обязательно для заполнения')
                .min(8, 'Минимальная длина - 8 символов')
                .max(40, 'Максимальная длина - 40 символов')
                .matches(
                    /^.*[A-ZА-ЯЁ]{1}.*$/,
                    'Должна быть как минимум одна заглавная буква'
                )
                .matches(/^.*[0-9].*$/i, 'Должна быть как минимум одна цифра')
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            setFormError('')

            authApi.signIn(values).then((result) => {
                if (result.successes) {
                    goToGame()
                } else {
                    setFormError(result.error)
                }
            })
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
                        <ButtonForm helper={formError}>Войти</ButtonForm>
                    </Container>
                </form>
            </Container>
        </Layout>
    )
}

export default LoginPage
