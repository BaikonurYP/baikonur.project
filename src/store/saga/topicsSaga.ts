import { put, call, all, takeLatest } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { toast } from 'react-toastify'

import {
    TopicsActionTypes,
    TopicState,
    SaveTopicAction,
} from '../types/topicTypes'
import { topicsApi } from '../../core/http/api/TopicsApi'
import * as actions from '../actions/topicsAction'
import { RequestResult } from '../../core/http/api/types/RequestResult'
import { TOAST_CONFIG } from '../../utils/constants'

function* getTopicsSaga(): Generator<StrictEffect, void, SaveTopicAction> {
    try {
        const data: RequestResult<TopicState> = (yield call(
            topicsApi.getAll.bind(topicsApi)
        )) as RequestResult<TopicState>
        yield put(actions.fetchTopicsSuccess(data.data))
    } catch (e) {
        yield put(actions.fetchTopicsError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* saveTopicSaga(
    action: SaveTopicAction
): Generator<StrictEffect, void, TopicState> {
    try {
        const data = yield call(topicsApi.create.bind(topicsApi), action.payload)
        yield put(actions.saveTopicSuccess(data.data))
    } catch (e) {
        yield put(actions.saveTopicError())
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(TopicsActionTypes.FETCH_TOPICS, getTopicsSaga),
        yield takeLatest(TopicsActionTypes.SAVE_TOPIC, saveTopicSaga),
    ])
}
