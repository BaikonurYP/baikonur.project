import * as themeController from '../controllers/themeController'

const Router = require('express')

const router = new Router()

router.patch('/', themeController.update)
router.get('/:id/', themeController.get)

export default router
