import * as topicsController from '../controllers/topicsController'

const Router = require('express')

const router = new Router()

router.post('/', topicsController.create)
router.get('/', topicsController.getAll)

export default router
