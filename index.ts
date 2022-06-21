import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Topics } from './src/tables/topics'

require('dotenv').config()

const { app } = require('./dist/server.js')

const sequelize = new Sequelize(
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
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
        console.error(e)
    }
}

start()