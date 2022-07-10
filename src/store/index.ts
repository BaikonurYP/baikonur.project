import { createStore, compose, applyMiddleware, Store } from 'redux'
import createSagaMiddleware, { END, SagaMiddleware } from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import { createBrowserHistory, createMemoryHistory, History } from 'history'
import { AppStore, State } from './types/redux'
import { rootReducer } from './reducers'
import rootSaga from './saga'

function getComposeEnhancers() {
    if (process.env.NODE_ENV !== 'production' && !isServer) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    return compose
}

export const isServer = !(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
)

export function configureStore(initialState: State, url = '/') {
    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory()

    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = getComposeEnhancers()
    const middlewares = [routerMiddleware(history), sagaMiddleware, logger]

    const store = createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    ) as AppStore

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)

    if (!isServer) {
        sagaMiddleware.run(rootSaga)
    }

    return { store, history }
}
