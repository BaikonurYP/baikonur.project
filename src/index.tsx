import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import Global from './styles/GlobalStyle/GlobalStyle'

ReactDOM.render(
    <>
        <Global />
        <App />
    </>,
    document.getElementById('root')
)
