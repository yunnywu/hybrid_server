//app.js
'use strict';
const koa = require('koa');
const server = require('koa-static');
const os = require('os');  

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
  console.log('Service is starting at ' + hostIp() + ' port 8900')
})


function hostIp() {
    var IPv4;
    if(process.platform === 'darwin') {
        for(var i = 0; i < os.networkInterfaces().en0.length; i++) {
            if(os.networkInterfaces().en0[i].family == 'IPv4') {
                IPv4 = os.networkInterfaces().en0[i].address;
            }
        }
    } else if(process.platform === 'win32') {
        for(var i = 0; i < os.networkInterfaces()['本地连接'].length; i++) {
            if(os.networkInterfaces()['本地连接'][i].family == 'IPv4') {
                IPv4 = os.networkInterfaces()['本地连接'][i].address;

            }
        }
    }
    return IPv4;
}




