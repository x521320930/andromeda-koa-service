import { Sequelize } from 'sequelize'
import * as path from 'path'
import * as fs from 'fs'

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  timezone: process.env.DB_TIMEZONE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'mysql',
  pool: { max: 5, min: 0, idle: 10000 }
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

const db: { [key: string]: any } = {}

fs.readdirSync(`${__dirname}/modules`).forEach((file) => {
  const model = sequelize.import(path.join(__dirname, `/modules/${file}`))
  db[model.name] = model
  if (db[model.name].associate) db[model.name].associate(db);
})


export default db
