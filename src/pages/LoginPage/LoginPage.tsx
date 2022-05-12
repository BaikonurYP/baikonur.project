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

const authApi = new AuthApi()

/** Страница логина */
const LoginPage: FC = () => {
    const history = useHistory()

    const goToGame = () => {
        history.push(`/game`)
    }

    /** текущее touched-поле */
    const [touched, setTouched] = React.useState('')
    const onBlur = (e: any) => {
        setTouched('')
    }

    const onFocus = (field: string) => {
        setFormError('')
        setTouched(field)
    }

    /** Поле логина */
    const [lfVal, setLfVal] = React.useState('')
    const lfOnChange = (e: React.ChangeEvent<any>) => {
        setTouched('login')
        setLfVal(e.target.value)
    }

    /** Поле пароля */
    const [pfVal, setPfVal] = React.useState('')
    const pfOnChange = (e: React.ChangeEvent<any>) => {
        setTouched('password')
        setPfVal(e.target.value)
    }

    /** Ошибки полей */
    const [lfError, setLfError] = React.useState('')
    const [pfError, setPfError] = React.useState('')

    /** Проверка полей валидаторами */
    React.useEffect(() => {
        setLfError(loginValidator(lfVal))
        setPfError(passwordValidator(pfVal))
    }, [lfVal, pfVal])

    /** Поле валидности формы */
    const [formValid, setFormValid] = React.useState(false)

    /** Проверка валидности формы (если валидна - кнопку можно нажать) */
    React.useEffect(() => {
        setFormValid(lfVal && pfVal && !lfError && !pfError)
    }, [lfVal, pfVal, lfError, pfError])

    /** Ошибка формы */
    const [formError, setFormError] = React.useState('')

    /** Обработка нажатия */
    const submitClick = () => {
        setFormError('')
        if (!lfVal || !lfVal) {
            setFormError('Пожалуйста, заполните все необходимые поля')
            return
        } else if (lfError || pfError) {
            setFormError('Одно или несколько полей содержат ошибки')
            return
        }
        authApi
            .signIn({
                login: lfVal,
                password: pfVal,
            })
            .then((result) => {
                if (result.successes) {
                    goToGame()
                } else {
                    setFormError(result.error)
                }
            })
    }

    return (
        <Layout hasMenu>
            <Container direction="column">
                <Logo />
                <Input
                    name="login"
                    type="text"
                    placeholder="Логин"
                    value={lfVal}
                    helper={lfError}
                    state={lfError ? 'danger' : 'default'}
                    touched={touched === 'login'}
                    onChange={lfOnChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus('login')}
                ></Input>
                <Input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={pfVal}
                    helper={pfError}
                    state={pfError ? 'danger' : 'default'}
                    touched={touched === 'password'}
                    onChange={pfOnChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus('password')}
                ></Input>
                <br />
                <ButtonForm onClick={submitClick} helper={formError}>
                    Войти
                </ButtonForm>
            </Container>
        </Layout>
    )
}

export default LoginPage
