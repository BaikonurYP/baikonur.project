import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { toast, ToastOptions } from 'react-toastify'

import {
    LeadersActionTypes,
    LeadersState,
    SaveLeaderAction
} from '../types/leaderTypes'
import LeaderApi from '../../core/http/api/LeaderApi'
import * as actions from '../actions/leadersAction'
import { RequestResult } from '../../core/http/api/types/RequestResult'

const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined as any,
    theme: 'dark'
}
function* getLeadersSaga(): Generator<StrictEffect, void, LeadersState> {
    try {
        const data: RequestResult<LeadersState> = (yield call(
            LeaderApi.fetchLeaders.bind(LeaderApi),
            10
        )) as RequestResult<LeadersState>
        yield put(actions.fetchLeadersSuccess(data.data))
    } catch (e) {
        yield put(actions.fetchLeadersError(e))
        toast.error(`Ошибка: ${e}`, toastConfig)
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
        toast.error(`Ошибка: ${e}`, toastConfig)
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(LeadersActionTypes.FETCH_LEADERS, getLeadersSaga),
        yield takeLatest(LeadersActionTypes.SAVE_LEADER, saveLeadersSaga)
    ])
}
