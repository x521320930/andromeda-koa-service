/**
 * @param modelName 模型
*/

import { Sequelize, ModelAttributes, ModelOptions } from 'sequelize'


const user = (sequelize: Sequelize, DataTypes: any) => {

  const modelName = 'user'
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
      comment: '用户ID 自增'
    },
    nickName: {
      type: DataTypes.STRING(100),
      field: 'nick_name',
      comment: '昵称',
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(100),
      field: 'user_name',
      comment: '用户名',
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      comment: '用户密码',
      allowNull: false
    },
    sourceType: {
      type: DataTypes.STRING(100),
      field: 'source_type',
      comment: '来源',
      allowNull: false
    },
    // utf8mb4_general_ci
    userIconUrl: {
      type: DataTypes.STRING(100),
      field: 'user_icon_url',
      comment: '用户图标',
      allowNull: false
    },
    phone: { type: DataTypes.STRING(16), allowNull: false, comment: '手机号' },
    email: { type: DataTypes.STRING(254), allowNull: false, comment: '邮箱' },
    description: {type: DataTypes.STRING(500), allowNull: false, comment: '个人描述'}
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
    // modelName: 'users',
    tableName: 'users',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }

  return sequelize.define(modelName, attributes, options)
}

export default user