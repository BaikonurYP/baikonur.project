import { all, call, put, StrictEffect, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import {
    ChangeAvatarAction,
    ChangeDataAction,
    ChangePasswordsAction,
    LoginAction,
    OAuthAction,
    SignUpAction,
    User,
    UserActionTypes,
    UserState
} from '../types/userTypes'
import {
    changeAvatarError,
    changeAvatarSuccess,
    changeDataError,
    changeDataSuccess,
    changePasswordsError,
    changePasswordsSuccess,
    fetchUserError,
    fetchUserSuccess,
    loginError,
    loginSuccess,
    oAuthAccess,
    signUpError,
    signUpSuccess
} from '../actions/userActions'
import { changeAuthSuccess } from '../actions/authActions'
import { RequestResult } from '../../core/http/api/types/RequestResult'
import { authApi } from '../../core/http/api/AuthApi'
import { userApi } from '../../core/http/api/UserApi'
import { TOAST_CONFIG } from '../../utils/constants'

function* getUserSaga(): Generator<
    StrictEffect,
    void,
    UserState | RequestResult<User>
    > {
    try {
        const data: RequestResult<User> = (yield call(
            authApi.user.bind(authApi)
        )) as RequestResult<User>
        if (data.successes) {
            yield put(fetchUserSuccess(data.data))
            yield put(changeAuthSuccess(true))
        } else throw data.error
    } catch (e) {
        yield put(fetchUserError(e))
    }
}

function* loginUserSaga(
    action: LoginAction
): Generator<StrictEffect, void, string> {
    try {
        const res = (yield call(
            authApi.signIn.bind(authApi),
            action.payload
        )) as RequestResult<string>
        if (res.successes) {
            yield put(loginSuccess())
            yield put({ type: UserActionTypes.FETCH_USER })
            yield put(changeAuthSuccess(true))
            toast.success('Вы успешно вошли', TOAST_CONFIG)
        } else throw res.error
    } catch (e) {
        yield put(loginError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* logOutUserSaga(): Generator<
    StrictEffect,
    void,
    UserState | RequestResult<User>
    > {
    try {
        const data: RequestResult<User> = (yield call(
            authApi.logout.bind(authApi)
        )) as RequestResult<User>
        if (data.successes) {
            yield put(fetchUserSuccess(null))
            yield put(changeAuthSuccess(false))
        } else throw data.error
    } catch (e) {
        yield put(fetchUserError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* registerUserSaga(
    action: SignUpAction
): Generator<StrictEffect, void, string> {
    try {
        const res = (yield call(
            authApi.signUp.bind(authApi),
            action.payload
        )) as RequestResult<string>
        if (res.successes) {
            yield put(signUpSuccess())
            yield put({ type: UserActionTypes.FETCH_USER })
            yield put(changeAuthSuccess(true))
            toast.success('Вы успешно зарегестрированы', TOAST_CONFIG)
        } else throw res.error
    } catch (e) {
        yield put(signUpError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* oAuthAccessUserSaga(
    action: OAuthAction
): Generator<StrictEffect, void, RequestResult<{ service_id: string }>> {
    try {
        const res = (yield call(
            authApi.getOAuthId.bind(authApi)
        )) as RequestResult<{ service_id: string }>
        if (res.successes) {
            const href = window.location.origin
            const redirect = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${res.data.service_id}&redirect_uri=${href}`
            document.location.href = redirect
        } else throw res.error
    } catch (e) {
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* oAuthRequestUserSaga(
    action: OAuthAction
): Generator<StrictEffect, void, RequestResult<string>> {
    try {
        const res = (yield call(authApi.oAuth.bind(authApi), {
            code: action.payload
        })) as RequestResult<string>
        if (res.successes) {
            yield put({ type: UserActionTypes.FETCH_USER })
        } else throw res.error
    } catch (e) {
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* changeUserSaga(
    action: ChangeDataAction
): Generator<StrictEffect, void, UserState | RequestResult<User>> {
    try {
        const data: RequestResult<User> = (yield call(
            userApi.updateUser.bind(userApi),
            action.payload
        )) as RequestResult<User>
        if (data.successes) {
            yield put(changeDataSuccess(data.data))
            yield put({ type: UserActionTypes.FETCH_USER })
            toast.success('Данные пользователя успешно сохранены', TOAST_CONFIG)
        } else throw data.error
    } catch (e) {
        yield put(changeDataError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* changeUserPasswordSaga(
    action: ChangePasswordsAction
): Generator<StrictEffect, void, UserState | RequestResult<User>> {
    try {
        const data: RequestResult<string> = (yield call(
            userApi.updatePassword.bind(userApi),
            action.payload
        )) as RequestResult<string>
        if (data.successes) {
            yield put(changePasswordsSuccess())
            yield put({ type: UserActionTypes.FETCH_USER })
            toast.success('Новый пароль сохранен', TOAST_CONFIG)
        } else throw data.error
    } catch (e) {
        yield put(changePasswordsError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* changeUserAvatarSaga(
    action: ChangeAvatarAction
): Generator<StrictEffect, void, UserState | RequestResult<User>> {
    try {
        const data: RequestResult<User> = (yield call(
            userApi.updateAvatar.bind(userApi),
            action.payload
        )) as RequestResult<User>
        if (data.successes) {
            yield put(changeAvatarSuccess(data.data))
            yield put({ type: UserActionTypes.FETCH_USER })
            toast.success('Аватар обновлен', TOAST_CONFIG)
        } else throw data.error
    } catch (e) {
        yield put(changeAvatarError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        takeLatest(UserActionTypes.FETCH_USER, getUserSaga),
        takeLatest(UserActionTypes.LOGOUT_REQUEST, logOutUserSaga),
        takeLatest(UserActionTypes.LOGIN_REQUEST, loginUserSaga),
        takeLatest(UserActionTypes.SIGNUP_REQUEST, registerUserSaga),
        takeLatest(UserActionTypes.OAUTH_ACCESS, oAuthAccessUserSaga),
        takeLatest(UserActionTypes.OAUTH_REQUEST, oAuthRequestUserSaga),
        takeLatest(UserActionTypes.CHANGE_DATA_REQUEST, changeUserSaga),
        takeLatest(
            UserActionTypes.CHANGE_PASSWORDS_REQUEST,
            changeUserPasswordSaga
        ),
        takeLatest(UserActionTypes.CHANGE_AVATAR_REQUEST, changeUserAvatarSaga)
    ])
}
