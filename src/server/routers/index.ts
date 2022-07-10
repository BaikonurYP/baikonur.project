import commentsRouter from './commentsRouter'
import topicsRouter from './topicsRouter'
import themeRouter from './themeRouter'

const Router = require('express')

const router = Router()

router.use('/comments', commentsRouter)
router.use('/topics', topicsRouter)
router.use('/theme', themeRouter)

export default router
