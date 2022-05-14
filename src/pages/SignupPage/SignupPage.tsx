import { Formik } from 'formik'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import { chunkArray } from '../../core/helpers/ArrayHelpers'
import {
    emailValidator,
    firstNameValidator,
    loginValidator,
    passwordValidator,
    phoneValidator,
    secondNameValidator,
} from '../../core/helpers/FormValidator'
import { AuthApi } from '../../core/http/api/AuthApi'

const authApi = new AuthApi()

type signUpFields = {
    login: string
    password: string
    first_name: string
    second_name: string
    email: string
    phone: string
}

const signUpFieldsPreset: {
    [key in keyof signUpFields]: {
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
    first_name: {
        type: 'text',
        name: 'first_name',
        placeholder: 'Имя',
        validator: firstNameValidator,
    },
    second_name: {
        type: 'text',
        name: 'second_name',
        placeholder: 'Фамилия',
        validator: secondNameValidator,
    },
    email: {
        type: 'text',
        name: 'email',
        placeholder: 'Email',
        validator: emailValidator,
    },
    phone: {
        type: 'text',
        name: 'phone',
        placeholder: 'Номер телефона',
        validator: phoneValidator,
    },
}

/** Страница регистрации */
const SignupPage: FC = () => {
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
                    initialValues={{ login: '', password: '', first_name: '', second_name: '', phone: '', email: '' } as signUpFields}
                    validate={(values: signUpFields) => {
                        const errors: Partial<signUpFields> = {}
                        Object.keys(values).forEach(
                            (value: keyof signUpFields) => {
                                if (!values[value]) {
                                    errors[
                                        value
                                    ] = `Поле "${signUpFieldsPreset[value].placeholder}" должно быть заполнено`
                                } else if (
                                    signUpFieldsPreset[value].validator(
                                        values[value]
                                    )
                                ) {
                                    errors[value] = signUpFieldsPreset[
                                        value
                                    ].validator(values[value])
                                }
                            }
                        )

                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false)
                        setFormError('')
                        authApi.signUp(values).then((result) => {
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
                        <form onSubmit={handleSubmit} style={{"width": "100%"}}>
                            <Container direction="column">
                                <br />
                                {chunkArray(
                                    Object.keys(signUpFieldsPreset)
                                ).map((fields: (keyof signUpFields)[]) => (
                                    <Container
                                        mineAxisAlign="between"
                                        key={fields[0]}
                                        width={70}
                                    >
                                        {fields.map((field) => (
                                            <Input
                                                key={
                                                    signUpFieldsPreset[field]
                                                        .name
                                                }
                                                type={
                                                    signUpFieldsPreset[field]
                                                        .type
                                                }
                                                name={
                                                    signUpFieldsPreset[field]
                                                        .name
                                                }
                                                placeholder={
                                                    signUpFieldsPreset[field]
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
                                        ))}
                                    </Container>
                                ))}

                                <ButtonForm helper={formError}>
                                    Зарегистрироваться
                                </ButtonForm>
                            </Container>
                        </form>
                    )}
                </Formik>
            </Container>
        </Layout>
    )
}

export default SignupPage
