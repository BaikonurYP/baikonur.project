import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { App } from './components/App/App'
import Global from './styles/GlobalStyle/GlobalStyle'
import 'babel-polyfill'

import { State } from './store/types/redux'
import { configureStore } from './store'

export const { store, history } = configureStore(window.__INITIAL_STATE__)

// global redeclared types
declare global {
    interface Window {
        __INITIAL_STATE__: State
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
    }
}

ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Global />
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
