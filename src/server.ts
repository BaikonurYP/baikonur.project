import path from 'path'
import express from 'express'
import 'babel-polyfill'
import { Sequelize } from 'sequelize-typescript'
import { middlewares } from '../src/server/middleware'
import serverRenderMiddleware from './server-render-middleware'

import router from './server/routers'
import { db } from './server/tables'

export const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [db.Topics, db.Comments],
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(express.json())

app.use('/api', router)

app.get('/*', [...middlewares], serverRenderMiddleware)

export { app }
