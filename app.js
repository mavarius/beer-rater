require('dotenv').config()

// PORT
const PORT = process.env.PORT || 8080

// REQUIRES
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

// SERVER DECLARATION
const app = express()
const compiler = webpack(webpackConfig)

// MIDDLEWARE
app.use(morgan('dev'))
app.use(express.static('build'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

// WEBPACK CONFIG
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, noInfo: true
}))

app.use(webpackHotMiddleware(compiler))

// ROUTES
app.use('/api', require('./routes/api'))
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`)
})
