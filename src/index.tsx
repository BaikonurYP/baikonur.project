import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import Global from './styles/GlobalStyle/GlobalStyle'

ReactDOM.render(
    <BrowserRouter>
        <Global />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
