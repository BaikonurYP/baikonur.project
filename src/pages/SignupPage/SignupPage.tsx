import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
import { Layout } from '../../components/layout/layout'
import { Logo } from '../../components/logo/logo'
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

/** Страница регистрации */
const SignupPage: FC = () => {
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

    /** Поле имени */
    const [fnfVal, setFnfVal] = React.useState('')
    const fnfOnChange = (e: React.ChangeEvent<any>) => {
        setTouched('first_name')
        setFnfVal(e.target.value)
    }

    /** Поле фамилии */
    const [lnfVal, setLnfVal] = React.useState('')
    const lnfOnChange = (e: React.ChangeEvent<any>) => {
        setTouched('second_name')
        setLnfVal(e.target.value)
    }

    /** Поле почты */
    const [efVal, setEfVal] = React.useState('')
    const efOnChange = (e: React.ChangeEvent<any>) => {
        setTouched('email')
        setEfVal(e.target.value)
    }

    /** Поле телефона */
    const [phfVal, setPhfVal] = React.useState('')
    const phfOnChange = (e: React.ChangeEvent<any>) => {
        setTouched('phone')
        setPhfVal(e.target.value)
    }

    /** Ошибки полей */
    const [lfError, setLfError] = React.useState('')
    const [pfError, setPfError] = React.useState('')
    const [fnfError, setFnfError] = React.useState('')
    const [lnfError, setLnfError] = React.useState('')
    const [efError, setEfError] = React.useState('')
    const [phfError, setPhfError] = React.useState('')

    /** Проверка полей валидаторами */
    React.useEffect(() => {
        setLfError(loginValidator(lfVal))
        setPfError(passwordValidator(pfVal))
        setFnfError(firstNameValidator(fnfVal))
        setLnfError(secondNameValidator(lnfVal))
        setEfError(emailValidator(efVal))
        setPhfError(phoneValidator(phfVal))
    }, [lfVal, pfVal, fnfVal, lnfVal, efVal, phfVal])

    /** Поле валидности формы */
    const [formValid, setFormValid] = React.useState(false)

    /** Проверка валидности формы (если валидна - кнопку можно нажать) */
    React.useEffect(() => {
        setFormValid(
            lfVal &&
                pfVal &&
                fnfVal &&
                lnfVal &&
                efVal &&
                phfVal &&
                !lfError &&
                !pfError &&
                !fnfError &&
                !lnfError &&
                !efError &&
                !phfError
        )
    }, [
        lfVal,
        pfVal,
        fnfVal,
        lnfVal,
        efVal,
        phfVal,
        lfError,
        pfError,
        fnfError,
        lnfError,
        efError,
        phfError,
    ])

    /** Ошибка формы */
    const [formError, setFormError] = React.useState('')

    /** Обработка нажатия */
    const submitClick = () => {
        setFormError('')
        if (!lfVal || !lfVal || !fnfVal || !lnfVal || !efVal || !phfVal) {
            setFormError('Пожалуйста, заполните все необходимые поля')
            return
        } else if (
            lfError ||
            pfError ||
            fnfError ||
            lnfError ||
            efError ||
            phfError
        ) {
            setFormError('Одно или несколько полей содержат ошибки')
            return
        }
        authApi
            .signUp({
                login: lfVal,
                password: pfVal,
                first_name: fnfVal,
                second_name: lnfVal,
                email: efVal,
                phone: phfVal,
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
                <Input
                    name="first_name"
                    type="text"
                    placeholder="Имя"
                    value={fnfVal}
                    helper={fnfError}
                    state={fnfError ? 'danger' : 'default'}
                    touched={touched === 'first_name'}
                    onChange={fnfOnChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus('first_name')}
                ></Input>
                <Input
                    name="second_name"
                    type="text"
                    placeholder="Фамилия"
                    value={lnfVal}
                    helper={lnfError}
                    state={lnfError ? 'danger' : 'default'}
                    touched={touched === 'second_name'}
                    onChange={lnfOnChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus('second_name')}
                ></Input>
                <Input
                    name="email"
                    type="text"
                    placeholder="EMail"
                    value={efVal}
                    helper={efError}
                    state={efError ? 'danger' : 'default'}
                    touched={touched === 'email'}
                    onChange={efOnChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus('email')}
                ></Input>
                <Input
                    name="phone"
                    type="text"
                    placeholder="Номер телефона"
                    value={phfVal}
                    helper={phfError}
                    state={phfError ? 'danger' : 'default'}
                    touched={touched === 'phone'}
                    onChange={phfOnChange}
                    onBlur={onBlur}
                    onFocus={() => onFocus('phone')}
                ></Input>
                <br />
                <ButtonForm onClick={submitClick} helper={formError}>
                    Зарегистрироваться
                </ButtonForm>
            </Container>
        </Layout>
    )
}

export default SignupPage
