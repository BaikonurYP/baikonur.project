import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Topics } from './src/server/tables/topics'
import { Comments } from './src/server/tables/comments'

require('dotenv').config()

const { app } = require('./dist/server.js')

export const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Topics, Comments],
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true})
        app.listen(port, () => {
            console.log(`Application is started on localhost:${port}`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
