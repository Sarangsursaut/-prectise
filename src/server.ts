import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)

;(() => {
    try {
        console.info('APPLICATION STARTED', {
            meta: {
                port: config.PORT,
                server_url: config.SERVER_URL,
            },
        })
    } catch (err) {
        console.error('ERROR STARTING APPLICATION', {
            meta: err,
        })
        server.close((err?: Error) => {
            if (err) {
                console.error('APPLICATION SHUTDOWN ERROR', { meta: err })
            }
            process.exit(1)
        })
    }
})()
