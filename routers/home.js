//home.js

const router = require('koa-router')();

module.exports = router.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
      <li><a href="/api/get/data.json">/api/get/data.json</a></li>
      <li><a href="/api/get/package.json">/api/get/package.json</a></li>
      <li><a href="/page/girl/mm.html">/page/girl/mm.html</a></li>
    </ul>
  `
  ctx.body = html
})