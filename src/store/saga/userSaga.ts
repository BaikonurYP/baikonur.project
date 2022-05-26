import { all, call, put, StrictEffect, takeLatest, delay } from 'redux-saga/effects'
import {
    ChangeAvatarAction,
    ChangeDataAction,
    ChangePasswordsAction,
    LoginAction,
    SignUpAction,
    User,
    UserActionTypes,
    UserState
} from '../types/userTypes'
import {
    changeAvatarComlete,
    changeAvatarError,
    changeAvatarSuccess,
    changeDataComlete,
    changeDataError,
    changeDataSuccess,
    changePasswordsComlete,
    changePasswordsError,
    changePasswordsSuccess,
    fetchUserError,
    fetchUserSuccess,
    loginComlete,
    loginError,
    loginSuccess,
    signUpComlete,
    signUpError,
    signUpSuccess
} from '../actions/userActions'
import { RequestResult } from '../../core/http/api/types/RequestResult'
import { authApi } from '../../core/http/api/AuthApi'
import { userApi } from '../../core/http/api/UserApi'


function* getUserSaga(): Generator<
    StrictEffect,
    void,
    UserState | RequestResult<User>
> {
    try {
        const data: RequestResult<User> = (yield call(
            authApi.user.bind(authApi)
        )) as RequestResult<User>
        if (data.successes) yield put(fetchUserSuccess(data.data))
        else throw data.error
    } catch (e) {
        yield put(fetchUserError(e))
    }
}

function* loginUserSaga(
    action: LoginAction
): Generator<StrictEffect, void, string> {
    try {
        const res = (yield call(authApi.signIn.bind(authApi),
        action.payload)) as RequestResult<string>
        if (res.successes) {
            yield put(loginSuccess())
            yield put({ type: UserActionTypes.FETCH_USER })
        } else throw res.error
    } catch (e) {
        yield put(loginError(e))
    }
    finally{
        yield delay(3000);
        yield put(loginComlete())
    }
}

function* registerUserSaga(
    action: SignUpAction
): Generator<StrictEffect, void, string> {
    try {
        const res = (yield call(authApi.signUp.bind(authApi),
        action.payload))as RequestResult<string>
        if (res.successes) {
            yield put(signUpSuccess())
            yield put({ type: UserActionTypes.FETCH_USER });
            
        } else throw res.error
    } catch (e) {
        yield put(signUpError(e))
    }
    finally{
        yield delay(3000);
        yield put(signUpComlete())
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
        } else throw data.error
    } catch (e) {
        yield put(changeDataError(e))
    }
    finally{
        yield delay(3000);
        yield put(changeDataComlete())
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
        } else throw data.error
    } catch (e) {
        yield put(changePasswordsError(e))
    }
    finally{
        yield delay(3000);
        yield put(changePasswordsComlete())
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
        } else throw data.error
    } catch (e) {
        yield put(changeAvatarError(e))
    }
    finally{
        yield delay(3000);
        yield put(changeAvatarComlete())
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([yield takeLatest(UserActionTypes.FETCH_USER, getUserSaga)])
    yield all([yield takeLatest(UserActionTypes.LOGIN_REQUEST, loginUserSaga)])
    yield all([
        yield takeLatest(UserActionTypes.SIGNUP_REQUEST, registerUserSaga)
    ])
    yield all([
        yield takeLatest(UserActionTypes.CHANGE_DATA_REQUEST, changeUserSaga)
    ])
    yield all([
        yield takeLatest(
            UserActionTypes.CHANGE_PASSWORDS_REQUEST,
            changeUserPasswordSaga
        )
    ])
    yield all([
        yield takeLatest(
            UserActionTypes.CHANGE_AVATAR_REQUEST,
            changeUserAvatarSaga
        )
    ])
}
