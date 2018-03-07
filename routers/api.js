//api.js

const router = require('koa-router')();
const getFileContent = require('../util/file');
const fs = require('fs');

module.exports = router.get('/get/data.json', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'hello world!'
    }
  }
}).get('/get/package.json', async ( ctx )=>{
    let data = await getFileContent('data/hybrid.json');
    console.log(data);
    ctx.body = data;
})