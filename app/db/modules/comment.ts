/**
 * @param modelName 模型
*/

import { Sequelize, ModelAttributes, ModelOptions } from 'sequelize'


const comment = (sequelize: Sequelize, DataTypes: any) => {

  const modelName = 'comment'
  /**
   * @description sequelize  attributes 对照表
   * @param type 对应数据库类型
   * @param allowNull 是否允许为空 默认 true
   * @param defaultValue 默认值为Null
   * @param field 对应数据库字段名
   * @param unique 唯一值
   * @param primaryKey 是否是主键
   * @param autoIncrement 是否是自增的
  */
  
  const attributes: ModelAttributes = {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      comment: '评论 自增'
    },
    desc: {
      type: DataTypes.STRING(100),
      comment: '评论信息',
      allowNull: false
    },
    sourceType: {
      type: DataTypes.STRING(100),
      field: 'source_type',
      comment: '评论来源',
      allowNull: false
    },
    articleId: {
      type: DataTypes.INTEGER,
      field: 'article_id',
      comment: '文章id',
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      comment: '用户id',
      allowNull: false
    },
    userIconUrl: {
      type: DataTypes.INTEGER,
      field: 'user_icon_url',
      comment: '用户图片',
      allowNull: false
    },
    userNickName: {
      type: DataTypes.INTEGER,
      field: 'user_nick_name',
      comment: '用户名称',
      allowNull: false
    }
  }
  
  /**
   * @description sequelize  attributes 对照表
   * @param timestamps 将createdAt和updatedAt时间戳添加到模型中。默认true
   * @param createdAt 可以用字符串覆盖名称 也可以为false 禁用它
   * @param updatedAt 可以用字符串覆盖名称 也可以为false 禁用它
   * @param deletedAt 对应数据库字段名
   * @param tableName 表名字
  */
  
  const options: ModelOptions = {
    createdAt: 'creation_time',
    updatedAt: 'update_time',
    deletedAt: false,
    tableName: 'comments',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }

  return sequelize.define(modelName, attributes, options)
}

export default comment