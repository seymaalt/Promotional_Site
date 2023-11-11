const { createLogger, transports, format } = require("winston");

const linkLogger = createLogger({
    transports: [
        new transports.File({
            filename: "logs/info.log",
            level: "info",
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
})
const linkErrorLogger = createLogger({
    transports: [
        new transports.File({
            filename: 'logs/error.log',
            level: "error",
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = { linkLogger, linkErrorLogger }