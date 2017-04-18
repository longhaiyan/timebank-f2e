require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
var dataServer = require('./data-server')
var uploadServer = require('./upload-server')
// var app = express()

// 设置模拟接口服务器
dataServer(app);
// 处理图片上传
uploadServer(app)

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
/*
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})*/
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    console.log("设置set-cookie")
    if (typeof options === 'string') {
        options = {
            target: options,
            onProxyRes(proxyRes, req, res) {
                //set-cookie:JSESSIONID=6F766ED2EEEBEAA9245F7F908A848857; Path=/webserver/; HttpOnly

                var oldCookie = proxyRes.headers['set-cookie']
                if(oldCookie== null || oldCookie.length==0){
                    delete proxyRes.headers['set-cookie']
                    return
                }
                console.log(oldCookie)
                var oldCookieItems = oldCookie[0].split(';')
                var newCookie = ''
                for(var i=0; i < oldCookieItems.length; ++i){
                    if(newCookie.length >0)
                        newCookie += ';'
                    if(oldCookieItems[i].indexOf('Path=') >= 0)
                        newCookie += 'Path=/'
                    else
                        newCookie += oldCookieItems[i]
                }
                proxyRes.headers['set-cookie'] = [newCookie]
                //proxyRes.headers['x-addedygc'] = 'foobar';     // add new header to response
                //delete proxyRes.headers['connection'];       // remove header from response
            }
        }
    }
    app.use(proxyMiddleware(context, options))
})


// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
