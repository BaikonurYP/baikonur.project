require('dotenv').config()

const { app, sequelize } = require('./dist/server.js')


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Application is started on localhost:${port}`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
