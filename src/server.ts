import path from 'path'
import express from 'express'
import 'babel-polyfill'
import serverRenderMiddleware from './server-render-middleware'

import router from './server/routers'

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(express.json())

app.use('/api', router)

app.get('/', serverRenderMiddleware)

export { app }
