import {  useFormik } from 'formik'
import React, { FC, useEffect, useRef } from 'react'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
import * as yup from 'yup'
import { Header } from '../../components/header/header'
import FileInput from '../../components/inputs/fileInput/fileInput'
import {
    displayNameValidationChain,
    emailValidationChain,
    loginValidationChain,
    nameValidationChain,
    passwordValidationChain,
    phoneValidationChain
} from '../../components/inputs/validators'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import {
    changeAvatar,
    changeData,
    changePasswords,
    fetchUser
} from '../../store/actions/userActions'
import { Avatar } from '../../components/avatar/avatar'

/** Страница регистрации */
const ProfilePage: FC = () => {
    const {
        user,
        change_data_message,
        change_passwords_message,
        change_avatar_message
    } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    useEffect(() => {
        if (user) {
            userDataFormik.setValues(user)
        }
    }, [user])

    const userDataFormik = useFormik({
        initialValues: {
            login: '',
            display_name: '',
            first_name: '',
            second_name: '',
            phone: '',
            email: ''
        },
        validationSchema: yup.object({
            login: loginValidationChain,
            display_name: displayNameValidationChain,
            first_name: nameValidationChain,
            second_name: nameValidationChain,
            email: emailValidationChain,
            phone: phoneValidationChain
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            dispatch(changeData(values))
        }
    })

    const avatarRef = useRef<HTMLFormElement>()

    const avatarFormik = useFormik({
        initialValues: {
            avatar: null as File
        },
        onSubmit: (values, { setSubmitting, setValues }) => {
            setSubmitting(false)
            let formData = new FormData()
            formData.append('avatar', values.avatar, values.avatar.name)
            dispatch(changeAvatar(formData))
        }
    })

    useEffect(() => {
        if (change_passwords_message && change_passwords_message.type == 'default') {
            passwordFormik.resetForm();
        }
    }, [change_passwords_message])

    const passwordFormik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: ''
        },
        validationSchema: yup.object({
            oldPassword: passwordValidationChain,
            newPassword: passwordValidationChain
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            dispatch(changePasswords(values))
        }
    })

    return (
        <Layout hasMenu>
            <Container direction="column">
                <Logo />
                <Container direction="row" crossAxisAlign={'start'}>
                    <Container direction="column">
                        <Header>Профиль</Header>
                        <form
                            onSubmit={userDataFormik.handleSubmit}
                            style={{ width: '100%' }}
                        >
                            <Container direction="column">
                                <br />
                                <Input
                                    type="text"
                                    name="login"
                                    placeholder="Логин"
                                    value={userDataFormik.values.login}
                                    onChange={userDataFormik.handleChange}
                                    helper={userDataFormik.errors.login}
                                    state={
                                        userDataFormik.errors.login &&
                                        userDataFormik.touched.login
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={userDataFormik.handleBlur}
                                    touched={userDataFormik.touched.login}
                                />
                                <Input
                                    type="text"
                                    name="display_name"
                                    placeholder="Отображаемое имя"
                                    value={userDataFormik.values.display_name}
                                    onChange={userDataFormik.handleChange}
                                    helper={userDataFormik.errors.display_name}
                                    state={
                                        userDataFormik.errors.display_name &&
                                        userDataFormik.touched.display_name
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={userDataFormik.handleBlur}
                                    touched={
                                        userDataFormik.touched.display_name
                                    }
                                />
                                <Input
                                    type="text"
                                    name="first_name"
                                    placeholder="Имя"
                                    value={userDataFormik.values.first_name}
                                    onChange={userDataFormik.handleChange}
                                    helper={userDataFormik.errors.first_name}
                                    state={
                                        userDataFormik.errors.first_name &&
                                        userDataFormik.touched.first_name
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={userDataFormik.handleBlur}
                                    touched={userDataFormik.touched.first_name}
                                />
                                <Input
                                    type="text"
                                    name="second_name"
                                    placeholder="Фамилия"
                                    value={userDataFormik.values.second_name}
                                    onChange={userDataFormik.handleChange}
                                    helper={userDataFormik.errors.second_name}
                                    state={
                                        userDataFormik.errors.second_name &&
                                        userDataFormik.touched.second_name
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={userDataFormik.handleBlur}
                                    touched={userDataFormik.touched.second_name}
                                />
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={userDataFormik.values.phone}
                                    onChange={userDataFormik.handleChange}
                                    helper={userDataFormik.errors.phone}
                                    state={
                                        userDataFormik.errors.phone &&
                                        userDataFormik.touched.phone
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={userDataFormik.handleBlur}
                                    touched={userDataFormik.touched.phone}
                                />
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="EMail"
                                    value={userDataFormik.values.email}
                                    onChange={userDataFormik.handleChange}
                                    helper={userDataFormik.errors.email}
                                    state={
                                        userDataFormik.errors.email &&
                                        userDataFormik.touched.email
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={userDataFormik.handleBlur}
                                    touched={userDataFormik.touched.email}
                                />

                                <ButtonForm
                                    helper={change_data_message?.text}
                                    helperState={change_data_message?.type}
                                >
                                    Сохранить
                                </ButtonForm>
                                <br />
                            </Container>
                        </form>
                    </Container>
                    <Container direction="column">
                        <Header>Аватар</Header>
                        <form
                            onSubmit={avatarFormik.handleSubmit}
                            style={{ width: '100%' }}
                            ref={avatarRef}
                        >
                            <Container direction="column">
                                <div style={{ width: '50%' }}>
                                    <Avatar url={user?.avatar} />
                                </div>
                                <br />
                                <FileInput
                                    name="avatar"
                                    value={avatarFormik.values.avatar}
                                    accept={'image/jpeg,image/png,image/gif'}
                                    onChange={(event) => {
                                        avatarFormik.setFieldValue(
                                            'avatar',
                                            event.currentTarget.files[0]
                                        )
                                    }}
                                >
                                    Выберите файл
                                </FileInput>
                                <br />
                                {avatarFormik.values.avatar && (
                                    <ButtonForm
                                        helper={change_avatar_message?.text}
                                        helperState={change_avatar_message?.type}
                                        helperPosition={'bottom'}
                                    >
                                        Сохранить
                                    </ButtonForm>
                                )}
                            </Container>
                        </form>
                    </Container>
                    <Container direction="column">
                        <Header>Пароль</Header>
                        <form
                            onSubmit={passwordFormik.handleSubmit}
                            style={{ width: '100%' }}
                        >
                            <Container direction="column">
                                <Input
                                    type="password"
                                    name="oldPassword"
                                    placeholder="Старый пароль"
                                    value={passwordFormik.values.oldPassword}
                                    onChange={passwordFormik.handleChange}
                                    helper={passwordFormik.errors.oldPassword}
                                    state={
                                        passwordFormik.errors.oldPassword &&
                                        passwordFormik.touched.oldPassword
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={passwordFormik.handleBlur}
                                    touched={passwordFormik.touched.oldPassword}
                                />
                                <Input
                                    type="password"
                                    name="newPassword"
                                    placeholder="Новый пароль"
                                    value={passwordFormik.values.newPassword}
                                    onChange={passwordFormik.handleChange}
                                    helper={passwordFormik.errors.newPassword}
                                    state={
                                        passwordFormik.errors.newPassword &&
                                        passwordFormik.touched.newPassword
                                            ? 'danger'
                                            : 'default'
                                    }
                                    onBlur={passwordFormik.handleBlur}
                                    touched={passwordFormik.touched.newPassword}
                                />
                                <ButtonForm
                                    helper={change_passwords_message?.text}
                                    helperState={change_passwords_message?.type}
                                    helperPosition={'bottom'}
                                >
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
