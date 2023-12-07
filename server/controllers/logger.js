const { createLogger, transports, format } = require("winston");

const Logger = createLogger({
    transports: [
        new transports.File({
            filename: "logs/info.log",
            level: "info",
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
})
const ErrorLogger = createLogger({
    transports: [
        new transports.File({
            filename: 'logs/error.log',
            level: "error",
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})


module.exports = { Logger, ErrorLogger }