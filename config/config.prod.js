var base = require('./config.base')

if (process.env.NODE_ENV === 'production') {
    base.appPort = 80
    base.build.viewsOutputPath = 'dist-prod'
}

module.exports = base
