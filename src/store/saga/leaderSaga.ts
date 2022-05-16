import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import {LeadersActionTypes, LeadersState} from '../types/leaderTypes'
import { fetchLeadersApi } from '../api/leaderApi'
import { fetchLeadersSuccess } from '../actions/leadersAction'

function* getLeadersSaga() {
    const data: LeadersState = yield call(fetchLeadersApi)
    yield put(fetchLeadersSuccess(data?.leaders))
}

export default function* rootSaga(){
    yield all([
        // @ts-ignore
        yield takeLatest(LeadersActionTypes.FETCH_LEADERS, getLeadersSaga),
    ])
}
