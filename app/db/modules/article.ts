/**
 * @param modelName 模型
*/

import { Sequelize, ModelAttributes, ModelOptions } from 'sequelize'


const comment = (sequelize: Sequelize, DataTypes: any) => {

  const modelName = 'article'
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
    articleType: {
      type: DataTypes.STRING(1000),
      field: 'article_type',
      comment: '文章类型',
      defaultValue: 0
    },
    articleTitle: {
      type: DataTypes.STRING(255),
      field: 'article_title',
      comment: '文章标题',
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      comment: '用户id',
      allowNull: false
    },
    articleUrl: {
      type: DataTypes.STRING(200),
      field: 'article_url',
      comment: '用户id',
      allowNull: false
    },
    articleTop: {
      type: DataTypes.INTEGER,
      field: 'article_top',
      comment: '热门',
      defaultValue: 0
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
    tableName: 'articles',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }

  return sequelize.define(modelName, attributes, options)
}

export default comment