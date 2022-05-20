import { all, call, put, StrictEffect, takeLatest } from 'redux-saga/effects'
import { User, UserActionTypes, UserState } from '../types/userTypes'
import { AuthApi } from '../../core/http/api/AuthApi'
import { fetchUserError, fetchUserSuccess } from '../actions/userActions'
import { RequestResult } from '../../core/http/api/types/RequestResult'

const authApi = new AuthApi()

function* getUserSaga(): Generator<
    StrictEffect,
    void,
    UserState | RequestResult<User>
> {
    try {
        const data: RequestResult<User> = yield call(authApi.user.bind(authApi))
        if (data.successes) yield put(fetchUserSuccess(data.data))
        else throw data.error
    } catch (e) {
        yield put(fetchUserError(e))
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([yield takeLatest(UserActionTypes.FETCH_USER, getUserSaga)])
}
