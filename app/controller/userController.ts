import * as Koa from 'koa'


export default class UserController {
  
 
  /**
   * 
   */

  async getUserInfo (ctx: Koa.BaseContext) {
    ctx.body = ctx
  }
}