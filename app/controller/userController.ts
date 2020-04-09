import * as Koa from 'koa'
import { Model } from 'sequelize';

export default class UserController {
  
 
  /**
   * @description 获取用户信息
   */

  async getUserInfo (ctx: Koa.Context) {
    const data = await ctx.state.user.findAll()
    
    ctx.body = data
  }
}