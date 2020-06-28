import * as Koa from 'koa'
import router from './router/index'
import './config/env'
import db from  './db/index'
import * as cors from 'koa2-cors'
const app = new Koa()


// 解决跨域问题
app.use(cors)

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  if (!ctx.db) ctx.db = db
  await next()
})

/*
 * 启动路由
 */
app.use(router.routes())
/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
 *
 */ 
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})