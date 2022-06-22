import * as commentsController from '../controllers/commentsController'

const Router = require('express')

const router = new Router()

router.post('/', commentsController.create)
router.get('/show', commentsController.show)
router.get('/topic/:id', commentsController.getByTopicId)

export default router