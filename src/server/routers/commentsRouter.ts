import * as commentsController from '../controllers/commentsController'

const Router = require('express')

const router = new Router()

router.post('/', commentsController.create)
router.get('/topics/:id', commentsController.getByTopicId)

export default router