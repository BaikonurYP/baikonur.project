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
import { RequestResult } from '../../core/http/api/types/RequestResult'

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
        <Container has_logo={true}>
            <Input
                name="login"
                type="text"
                placeholder="Логин"
                value={lfVal}
                errror={lfError}
                touched={touched === 'login'}
                onChange={lfOnChange}
                onBlur={onBlur}
            ></Input>
            <Input
                name="password"
                type="password"
                placeholder="Пароль"
                value={pfVal}
                errror={pfError}
                touched={touched === 'password'}
                onChange={pfOnChange}
                onBlur={onBlur}
            ></Input>
            <br />
            <ButtonForm
                onClick={submitClick}
                disabled={!formValid}
                error={formError}
            >
                Войти
            </ButtonForm>
        </Container>
    )
}

export default LoginPage
