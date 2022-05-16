import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import Global from './styles/GlobalStyle/GlobalStyle'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
