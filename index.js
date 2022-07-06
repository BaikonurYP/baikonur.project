require('dotenv').config()
const https = require('https')
const { join } = require('path')
const { readFileSync } = require('fs')

const { app, sequelize } = require('./dist/server.js')


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        if (process.env.NODE_ENV === 'development') {
            const key = readFileSync(join(__dirname, '/src/server/certs', 'key.pem'), 'utf8')
            const options = {
                key: readFileSync(join(__dirname, '/src/server/certs', 'key.pem'), 'utf8'),
                cert: readFileSync(join(__dirname, '/src/server/certs', 'cert.pem'), 'utf8'),
            };

            https.createServer(options, app).listen(port, () => {
                console.log('Application is started on', `https://local.ya-praktikum.tech:${port}/`);
            });
            return;
        }
        app.listen(port, () => {
            console.log(`Application is started on localhost:${port}`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()