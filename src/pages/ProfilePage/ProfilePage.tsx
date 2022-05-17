import { Formik, useFormik } from 'formik'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import * as yup from 'yup'
import { UserApi } from '../../core/http/api/UserApi'
import { Header } from '../../components/header/header'
import FileInput from '../../components/inputs/fileInput/fileInput'
import { emailValidationChain, loginValidationChain, nameValidationChain, passwordValidationChain, phoneValidationChain } from '../../components/inputs/validators'

const userAoi = new UserApi()

/** Страница регистрации */
const ProfilePage: FC = () => {
    const history = useHistory()
    const goToGame = () => {
        history.push(`/game`)
    }

    /** Ошибка формы */
    const [formError, setFormError] = React.useState('')

    const formik = useFormik({
        initialValues: {
            login: '',
            display_name: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: '',
        },
        validationSchema: yup.object({
            login: loginValidationChain,
            display_name: nameValidationChain,
            first_name: nameValidationChain,
            second_name: nameValidationChain,
            email: emailValidationChain,
            phone: phoneValidationChain,
        }),
        onSubmit: (values, { setSubmitting }) => {
            // setSubmitting(false)
            // setFormError('')
            // userAoi.signUp(values).then((result) => {
            //     if (result.successes) {
            //         goToGame()
            //     } else {
            //         setFormError(result.error)
            //     }
            // })
        },
    })

    const formikPassword = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
        },
        validationSchema: yup.object({
            oldPassword: passwordValidationChain,
            newPassword: passwordValidationChain,
        }),
        onSubmit: (values, { setSubmitting }) => {
            // setSubmitting(false)
            // setFormError('')
            // userAoi.signUp(values).then((result) => {
            //     if (result.successes) {
            //         goToGame()
            //     } else {
            //         setFormError(result.error)
            //     }
            // })
        },
    })

    return (
        <Layout hasMenu>
            <Container direction="column">
                <Logo />
                <Container direction="row" crossAxisAlign={'start'}>
                    <Container direction="column">
                        <Header>Профиль</Header>
                        <form
                            onSubmit={formik.handleSubmit}
                            style={{ width: '100%' }}
                        >
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
                                        formik.errors.login &&
                                        formik.touched.login
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={formik.handleBlur}
                                    touched={formik.touched.login}
                                />
                                <Input
                                    type="text"
                                    name="display_name"
                                    placeholder="Отображаемое имя"
                                    value={formik.values.display_name}
                                    onChange={formik.handleChange}
                                    helper={formik.errors.display_name}
                                    state={
                                        formik.errors.display_name &&
                                        formik.touched.display_name
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={formik.handleBlur}
                                    touched={formik.touched.display_name}
                                />
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
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    helper={formik.errors.phone}
                                    state={
                                        formik.errors.phone &&
                                        formik.touched.phone
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
                                        formik.errors.email &&
                                        formik.touched.email
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={formik.handleBlur}
                                    touched={formik.touched.email}
                                />

                                <ButtonForm helper={formError}>
                                    Сохранить
                                </ButtonForm>
                            </Container>
                        </form>
                    </Container>
                    <Container direction="column">
                        <Header>Аватар</Header>
                        <Container direction="column">
                            <FileInput name="avatar" value={[]}>
                                Выберите файл
                            </FileInput>
                        </Container>
                    </Container>
                    <Container direction="column">
                        <Header>Пароль</Header>
                        <form
                            onSubmit={formikPassword.handleSubmit}
                            style={{ width: '100%' }}
                        >
                            <Container direction="column">
                                <Input
                                    type="password"
                                    name="oldPassword"
                                    placeholder="Старый пароль"
                                    value={formikPassword.values.oldPassword}
                                    onChange={formikPassword.handleChange}
                                    helper={formikPassword.errors.oldPassword}
                                    state={
                                        formikPassword.errors.oldPassword &&
                                        formikPassword.touched.oldPassword
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={formikPassword.handleBlur}
                                    touched={formikPassword.touched.oldPassword}
                                />
                                <Input
                                    type="password"
                                    name="newPassword"
                                    placeholder="Новый пароль"
                                    value={formikPassword.values.newPassword}
                                    onChange={formikPassword.handleChange}
                                    helper={formikPassword.errors.newPassword}
                                    state={
                                        formikPassword.errors.newPassword &&
                                        formikPassword.touched.newPassword
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={formikPassword.handleBlur}
                                    touched={formikPassword.touched.newPassword}
                                />
                                <ButtonForm helper={formError}>
                                    Сохранить
                                </ButtonForm>
                            </Container>
                        </form>
                    </Container>
                </Container>
            </Container>
        </Layout>
    )
}

export default ProfilePage
