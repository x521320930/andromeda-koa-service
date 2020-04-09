import * as Koa from 'koa'
import { Model } from 'sequelize';

export default class articleController {
  
 
  /**
   * @description 基础查询文章列表
   * @url /article/base
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async baseQueryArticle (ctx: Koa.Context) {
    
    const data = await ctx.state.article.findAll()
    
    ctx.body = data
  }


  /**
   * @description 查询
   * @url /article/add
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async add (ctx: Koa.Context) {
    
    const data = await ctx.state.article.findAll()
    
    ctx.body = data
  }


  /**
   * @description 更新
   * @url /article/update
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async update (ctx: Koa.Context) {
    
    const data = await ctx.state.article.findAll()
    
    ctx.body = data
  }


  /**
   * @description 删除
   * @url /article/destroy
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async destroy (ctx: Koa.Context) {
    
    const data = await ctx.state.article.findAll()
    
    ctx.body = data
  }
}