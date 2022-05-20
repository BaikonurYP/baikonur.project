import { Formik, useFormik } from 'formik'
import React, { FC, useEffect, useRef } from 'react'
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
import {
    displayNameValidationChain,
    emailValidationChain,
    loginValidationChain,
    nameValidationChain,
    passwordValidationChain,
    phoneValidationChain,
} from '../../components/inputs/validators'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser } from '../../store/actions/userActions'
import { TooltipState } from '../../components/tooltip/tooltipStyled'
import { Avatar } from '../../components/avatar/avatar'

const userApi = new UserApi()

/** Страница регистрации */
const ProfilePage: FC = () => {
    const user = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    const history = useHistory()
    const goToGame = () => {
        history.push(`/game`)
    }

    /** Информация формы c данными пользователя */
    const [userDataFormInfo, setUserDataFormInfo] = React.useState({
        helper: '',
        state: 'default',
    } as { helper: string; state: TooltipState })

    const userDataFormik = useFormik({
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
            display_name: displayNameValidationChain,
            first_name: nameValidationChain,
            second_name: nameValidationChain,
            email: emailValidationChain,
            phone: phoneValidationChain,
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            setUserDataFormInfo({ helper: '', state: 'default' })
            userApi.updateUser(values).then((result) => {
                if (result.successes) {
                    setUserDataFormInfo({
                        helper: 'Сохранено!',
                        state: 'default',
                    })
                    setTimeout(() => {
                        setUserDataFormInfo({ helper: '', state: 'default' })
                    }, 3000)
                } else {
                    setUserDataFormInfo({
                        helper: result.error,
                        state: 'danger',
                    })
                }
            })
        },
    })

    useEffect(() => {
        if (user) {
            userDataFormik.setValues(user)
        }
    }, [user])

    /** Хелпер формы c аватаркой */
    const [avatarFormError, setAvatarFormError] = React.useState({
        helper: '',
        state: 'default',
    } as { helper: string; state: TooltipState })

    const avatarRef = useRef<HTMLFormElement>();

    const avatarFormik = useFormik({
        initialValues: {
            avatar: null as File,
        },
        onSubmit: (values, { setSubmitting, setValues }) => {
            setSubmitting(false)
            setAvatarFormError({ helper: '', state: 'default' })
            console.log(avatarRef);
            let formData = new FormData();
            formData.append('avatar', values.avatar, values.avatar.name)
            userApi.updateAvatar(formData).then((result) => {
                if (result.successes) {
                    setAvatarFormError({
                        helper: 'Сохранено!',
                        state: 'default',
                    })
                    dispatch(fetchUser())
                    setValues({avatar: null})
                    setTimeout(() => {
                        setAvatarFormError({ helper: '', state: 'default' })
                    }, 3000)
                } else {
                    setAvatarFormError({
                        helper: result.error,
                        state: 'danger',
                    })
                }
            })
        },
    })

    /** Хелпер формы c данными пользователя */
    const [passwordFormError, setPasswordFormError] = React.useState({
        helper: '',
        state: 'default',
    } as { helper: string; state: TooltipState })

    const passwordFormik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
        },
        validationSchema: yup.object({
            oldPassword: passwordValidationChain,
            newPassword: passwordValidationChain,
        }),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false)
            setPasswordFormError({ helper: '', state: 'default' })
            userApi.updatePassword(values).then((result) => {
                if (result.successes) {
                    setPasswordFormError({
                        helper: 'Сохранено!',
                        state: 'default',
                    })
                    setTimeout(() => {
                        setPasswordFormError({ helper: '', state: 'default' })
                    }, 3000)
                } else {
                    setPasswordFormError({
                        helper: result.error,
                        state: 'danger',
                    })
                }
            })
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

                                <ButtonForm helper={userDataFormInfo.helper}>
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
                                        helper={avatarFormError.helper}
                                        helperState={passwordFormError.state}
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
                                    helper={passwordFormError.helper}
                                    helperState={passwordFormError.state}
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
