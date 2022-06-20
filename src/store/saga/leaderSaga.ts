import { put, call, all, takeLatest } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { toast } from 'react-toastify'

import {
    LeadersActionTypes,
    LeadersState,
    SaveLeaderAction,
} from '../types/leaderTypes'
import LeaderApi from '../../core/http/api/LeaderApi'
import * as actions from '../actions/leadersAction'
import { RequestResult } from '../../core/http/api/types/RequestResult'
import { TOAST_CONFIG } from '../../utils/constants'

function* getLeadersSaga(): Generator<StrictEffect, void, LeadersState> {
    try {
        const data: RequestResult<LeadersState> = (yield call(
            LeaderApi.fetchLeaders.bind(LeaderApi),
            10
        )) as RequestResult<LeadersState>
        yield put(actions.fetchLeadersSuccess(data.data))
    } catch (e) {
        yield put(actions.fetchLeadersError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* saveLeadersSaga(
    action: SaveLeaderAction
): Generator<StrictEffect, void, LeadersState> {
    try {
        yield call(LeaderApi.saveLeaderData.bind(LeaderApi), action.payload)
        yield put(actions.saveLeaderSuccess())
    } catch (e) {
        yield put(actions.saveLeaderError())
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(LeadersActionTypes.FETCH_LEADERS, getLeadersSaga),
        yield takeLatest(LeadersActionTypes.SAVE_LEADER, saveLeadersSaga),
    ])
}
