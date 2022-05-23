import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'

import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { StrictEffect } from '@redux-saga/types'

import { rootReducer } from './reducers'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const sagaConnect = (
    ...sagas: (() => Generator<StrictEffect, void, any>)[]
) => {
    sagas.forEach((saga) => sagaMiddleware.run(saga))
}

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

export const persistor = persistStore(store)

sagaConnect(...saga)

export default store
