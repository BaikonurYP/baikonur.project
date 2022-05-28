import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components/App/App'
import Global from './styles/GlobalStyle/GlobalStyle'

import store, { persistor } from './store'

ReactDOM.hydrate(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Global />
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
