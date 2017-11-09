//app.js
'use strict';
const koa = require('koa');
const server = require('koa-static');

const app = new koa();

const path = require('path');

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(server(
  path.join( __dirname,  staticPath)
))


const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())


app.listen(8900, () => {
  console.log('Service is starting at port 3000')
})







