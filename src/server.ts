import app from './app'
import config from './config/config'

// console.log("Starting server...")
// console.log(config, "=====>4")
const server = app.listen(config.PORT)

// eslint-disable-next-line no-console
console.log('Server is running on port', server)

// const port = server.address()?.port
// console.log("Server is running on port", port)

// import app from './app'
// import config from './config/config'

// const PORT = config.PORT || 3000

// const server = app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// }).on('error', (error: NodeJS.ErrnoException) => {
//     if (error.syscall !== 'listen') {
//         throw error
//     }
//     switch (error.code) {
//         case 'EACCES':
//             console.error(`Port ${PORT} requires elevated privileges`)
//             process.exit(1)
//         case 'EADDRINUSE':
//             console.error(`Port ${PORT} is already in use`)
//             process.exit(1)
//         default:
//             throw error
//     }
// })
