import React, { FC } from 'react'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import {
    loginValidator,
    passwordValidator,
} from '../../core/helpers/FormValidator'
import { AuthApi } from '../../core/http/api/AuthApi'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import { Formik } from 'formik'

const authApi = new AuthApi()

type loginFields = { login: string; password: string }

const loginFieldsPreset: {
    [key in keyof loginFields]: {
        type: string
        name: string
        placeholder: string
        validator: (str: string) => string
    }
} = {
    login: {
        type: 'text',
        name: 'login',
        placeholder: 'Логин',
        validator: loginValidator,
    },
    password: {
        type: 'password',
        name: 'password',
        placeholder: 'Пароль',
        validator: passwordValidator,
    },
}

/** Страница логина */
const LoginPage: FC = () => {
    const history = useHistory()

    const goToGame = () => {
        history.push(`/game`)
    }

    /** Ошибка формы */
    const [formError, setFormError] = React.useState('')

    return (
        <Layout hasMenu>
            <Container direction="column">
                <Logo />
                <Formik
                    initialValues={{ login: '', password: '' } as loginFields}
                    validate={(values: loginFields) => {
                        const errors: Partial<loginFields> = {}
                        Object.keys(values).forEach(
                            (value: keyof loginFields) => {
                                if (!values[value]) {
                                    errors[
                                        value
                                    ] = `Поле "${loginFieldsPreset[value].placeholder}" должно быть заполнено`
                                } else if (
                                    loginFieldsPreset[value].validator(
                                        values[value]
                                    )
                                ) {
                                    errors[value] = loginFieldsPreset[
                                        value
                                    ].validator(values[value])
                                }
                            }
                        )

                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false)
                        setFormError('');

                        authApi.signIn(values).then((result) => {
                            if (result.successes) {
                                goToGame()
                            } else {
                                setFormError(result.error)
                            }
                        })
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        isValid,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Container direction="column">
                                <br />
                                {Object.keys(loginFieldsPreset).map(
                                    (field: keyof loginFields) => (
                                        <Input
                                            key={loginFieldsPreset[field].name}
                                            type={loginFieldsPreset[field].type}
                                            name={loginFieldsPreset[field].name}
                                            placeholder={
                                                loginFieldsPreset[field]
                                                    .placeholder
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values[field]}
                                            touched={touched[field]}
                                            helper={errors[field]}
                                            state={
                                                errors[field]
                                                    ? 'danger'
                                                    : 'default'
                                            }
                                        ></Input>
                                    )
                                )}

                                <ButtonForm
                                    helper={formError}
                                >
                                    Войти
                                </ButtonForm>
                            </Container>
                        </form>
                    )}
                </Formik>
            </Container>
        </Layout>
    )
}

export default LoginPage
