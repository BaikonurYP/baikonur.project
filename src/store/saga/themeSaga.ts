import { put, call, all, takeLatest } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { toast } from 'react-toastify'

import {
    ThemeActionTypes,
    ThemeState,
    SaveThemeAction,
    FetchThemeAction
} from '../types/themeTypes'
import { themeApi } from '../../core/http/api/ThemeApi'
import * as actions from '../actions/themeAction'
import { RequestResult } from '../../core/http/api/types/RequestResult'
import { TOAST_CONFIG } from '../../utils/constants'

function* getThemeSaga(
    action: FetchThemeAction
): Generator<StrictEffect, void, SaveThemeAction> {
    try {
        const data: RequestResult<ThemeState> = (yield call(
            themeApi.get.bind(themeApi),
            action.payload
        )) as RequestResult<ThemeState>
        yield put(actions.fetchThemeSuccess(data.data))
    } catch (e) {
        yield put(actions.fetchThemeError(e))
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

function* saveThemeSaga(
    action: SaveThemeAction
): Generator<StrictEffect, void, ThemeState> {
    try {
        const data = yield call(themeApi.update.bind(themeApi), action.payload)
        yield put(actions.saveThemeSuccess(data.data))
    } catch (e) {
        yield put(actions.saveThemeError())
        toast.error(`Ошибка: ${e}`, TOAST_CONFIG)
    }
}

export default function* rootSaga(): Generator<StrictEffect, void, any> {
    yield all([
        yield takeLatest(ThemeActionTypes.FETCH_THEME, getThemeSaga),
        yield takeLatest(ThemeActionTypes.SAVE_THEME, saveThemeSaga)
    ])
}
