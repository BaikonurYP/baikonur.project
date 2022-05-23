import { Formik, useFormik } from 'formik'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import { AuthApi } from '../../core/http/api/AuthApi'
import * as yup from 'yup'

const authApi = new AuthApi()

/** Страница регистрации */
const SignupPage: FC = () => {
    const history = useHistory()
    const goToGame = () => {
        history.push(`/game`)
    }

    /** Ошибка формы */
    const [formError, setFormError] = React.useState('')

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
                .matches(/^.*[0-9].*$/i, 'Должна быть как минимум одна цифра'),
            first_name: yup
                .string()
                .required('Поле обязательно для заполнения')
                .matches(
                    /^[A-ZА-ЯЁ][A-zА-яЁё-]+$/,
                    'Допускается только кириллица, латиница и нижнее подчеркивание (_)'
                ),
            second_name: yup
                .string()
                .required('Поле обязательно для заполнения')
                .matches(
                    /^[A-ZА-ЯЁ][A-zА-яЁё-]+$/,
                    'Допускается только кириллица, латиница и нижнее подчеркивание (_)'
                ),
            email: yup
                .string()
                .required('Поле обязательно для заполнения')
                .email('Адрес электроной почты должен быь введен корректно'),
            phone: yup
                .string()
                .required('Поле обязательно для заполнения')
                .min(8, 'Минимальная длина - 8 символов')
                .max(15, 'Максимальная длина - 15 символов')
                .matches(
                    /^\+?\d{8,15}$/,
                    'Допускаются только цифры и знак плюса в начале'
                )
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            setFormError('')
            authApi.signUp(values).then((result) => {
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
                                    formik.errors.first_name &&
                                    formik.touched.first_name
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.first_name}
                            />
                            <Input
                                type="text"
                                name="second_name"
                                placeholder="Фамилия"
                                value={formik.values.second_name}
                                onChange={formik.handleChange}
                                helper={formik.errors.second_name}
                                state={
                                    formik.errors.second_name &&
                                    formik.touched.second_name
                                        ? 'danger'
                                        : 'default'
                                }
                                onBlur={formik.handleBlur}
                                touched={formik.touched.second_name}
                            />
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
                                touched={formik.touched.phone}
                            />
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
                                touched={formik.touched.email}
                            />
                        </Container>

                        <ButtonForm helper={formError}>
                            Зарегистрироваться
                        </ButtonForm>
                    </Container>
                </form>
            </Container>
        </Layout>
    )
}

export default SignupPage
