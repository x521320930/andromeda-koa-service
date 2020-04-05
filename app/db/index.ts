import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  timezone: process.env.DB_TIMEZONE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  dialect: 'mysql'
})
sequelize
  .authenticate()
  .then((res: any) => {
    console.log(res);
    console.log(`数据库连接成功: \n ${process.env.DB_DATABASE}`)
  })
  .catch((err: Error) => {
    console.error(`数据库连接失败: \n ${err.message}`)
  })

export default sequelize
