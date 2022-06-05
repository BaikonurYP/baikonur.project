import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import {LeadersActionTypes, LeadersState, Leader} from '../types/leaderTypes'
import LeaderApi from '../../core/http/api/LeaderApi'
import * as actions from '../actions/leadersAction'

function* getLeadersSaga(): Generator<StrictEffect, void, LeadersState> {
    const data: LeadersState = yield call(LeaderApi.fetchLeaders, 10)
    yield put(actions.fetchLeadersSuccess(data))
}

function* saveLeadersSaga(data: Leader): Generator<StrictEffect, void, LeadersState> {
    try {
        const result: string = yield call(LeaderApi.saveLeaderData, data)
        yield put(actions.saveLeaderSuccess(result));
    } catch (error) {
        yield put(actions.fetchLeadersError(error));
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(LeadersActionTypes.FETCH_LEADERS, getLeadersSaga),
        yield takeLatest(LeadersActionTypes.SAVE_LEADER, saveLeadersSaga),
    ])
}
