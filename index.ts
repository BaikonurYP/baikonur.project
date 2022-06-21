import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Topics } from './src/tables/topics'

require('dotenv').config()

const { app } = require('./dist/server.js')

const sequelize = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        // @ts-ignore
        port: process.env.DB_PORT
    }
)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        sequelize.addModels([Topics])
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Application is started on localhost:${port}`);
        })
    } catch (e) {
        console.log(e)
    }
}

start()