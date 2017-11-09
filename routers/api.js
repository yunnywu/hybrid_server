//api.js

const router = require('koa-router')();

module.exports = router.get('/get/data.json', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'hello world!'
    }
  }
}).get('/get/package.json', async ( ctx )=>{
  ctx.body = {
  	ret: 0,
    data: [{
    		version: '1.0.2',
    		domain:'s1.xmcdn.com',
    		md5:'ddf8acd41f833d290cb55bf72a982d16',
    		downloadUrl:'http://192.168.73.121:8900/vip/1.0.2.zip',
    		moduleName:'vip'

    	},{
			  version: '1.0.3',
    		domain:'s1.xmcdn.com',
    		md5:'41609471e4c3c09a2f275ad97c0d14c9',
    		downloadUrl:'http://192.168.73.121:8900/read/1.0.3.zip',
    		moduleName:'read'
    	},
      {
        version: '1.0.2',
        domain:'s1.xmcdn.com',
        md5:'dc1ef391486f1ac228101ec496d459fc',
        downloadUrl:'http://192.168.73.121:8900/all/1.0.2.zip',
        moduleName:'all',
      }
    ]
  }
})