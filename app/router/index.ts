import * as Router from 'koa-router'
import UserController from '../controller/userController'

const router = new Router()

Object.keys(new UserController())

router.get('/user', new UserController().getUserInfo)

 

export default router