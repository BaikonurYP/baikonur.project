import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { LeadersActionTypes, LeadersState } from '../types/leaderTypes'
import { fetchLeadersApi } from '../api/leaderApi'
import { fetchLeadersSuccess } from '../actions/leadersAction'

function* getLeadersSaga(): Generator<StrictEffect, void, LeadersState> {
    const data: LeadersState = yield call(fetchLeadersApi)
    yield put(fetchLeadersSuccess(data?.leaders))
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(LeadersActionTypes.FETCH_LEADERS, getLeadersSaga),
    ])
}
