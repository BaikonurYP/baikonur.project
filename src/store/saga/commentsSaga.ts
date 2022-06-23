import { put, call, all, takeLatest } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { toast } from 'react-toastify'

import {
    CommentActionTypes,
    CommentState, FetchCommentAction,
    SaveCommentAction
} from '../types/commentsTypes'
import { commentsApi } from '../../core/http/api/CommentsApi'
import * as actions from '../actions/commentsAction'
import { RequestResult } from '../../core/http/api/types/RequestResult'
import { TOAST_CONFIG } from '../../utils/constants'

function* getCommentsSaga(
    action: FetchCommentAction
): Generator<StrictEffect, void, CommentState> {
    try {
        console.log(action)

        const data: RequestResult<CommentState> = (yield call(
            commentsApi.getAll.bind(commentsApi), action.payload
        )) as RequestResult<CommentState>
        yield put(actions.fetchCommentsSuccess(data.data))
    } catch (e) {
        yield put(actions.fetchCommentsError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* saveCommentSaga(
    action: SaveCommentAction
): Generator<StrictEffect, void, CommentState> {
    try {
        const data = yield call(commentsApi.create.bind(commentsApi), action.payload)
        yield put(actions.saveCommentSuccess(data.data))
    } catch (e) {
        yield put(actions.saveCommentError())
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(CommentActionTypes.FETCH_COMMENTS, getCommentsSaga),
        yield takeLatest(CommentActionTypes.SAVE_COMMENT, saveCommentSaga)
    ])
}
