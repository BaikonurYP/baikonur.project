import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { ForkEffect, AllEffect } from 'redux-saga/effects'

import {rootReducer} from './reducers'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()


// eslint-disable-next-line no-undef
const sagaConnect = (...sagas: (() => Generator<ForkEffect<never> | AllEffect<any>, void, any>)[]) => {
    sagas.forEach((saga) => sagaMiddleware.run(saga))
}

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

sagaConnect(...saga)

export default store
