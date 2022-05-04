import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonForm from '../../components/buttons/buttonForm/buttonForm'
import Container from '../../components/container/container'
import Input from '../../components/inputs/input/input'
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
            <Input
                name="first_name"
                type="text"
                placeholder="Имя"
                value={fnfVal}
                errror={fnfError}
                touched={touched === 'first_name'}
                onChange={fnfOnChange}
                onBlur={onBlur}
            ></Input>
            <Input
                name="second_name"
                type="text"
                placeholder="Фамилия"
                value={lnfVal}
                errror={lnfError}
                touched={touched === 'second_name'}
                onChange={lnfOnChange}
                onBlur={onBlur}
            ></Input>
            <Input
                name="email"
                type="text"
                placeholder="EMail"
                value={efVal}
                errror={efError}
                touched={touched === 'email'}
                onChange={efOnChange}
                onBlur={onBlur}
            ></Input>
            <Input
                name="phone"
                type="text"
                placeholder="Номер телефона"
                value={phfVal}
                errror={phfError}
                touched={touched === 'phone'}
                onChange={phfOnChange}
                onBlur={onBlur}
            ></Input>
            <br />
            <ButtonForm
                onClick={submitClick}
                disabled={!formValid}
                error={formError}
            >
                Зарегистрироваться
            </ButtonForm>
        </Container>
    )
}

export default SignupPage
