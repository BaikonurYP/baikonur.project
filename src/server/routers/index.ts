import commentsRouter from './commentsRouter'
import topicsRouter from './topicsRouter'

const Router = require('express')

const router = Router()

router.use('/comments', commentsRouter)
router.use('/topics', topicsRouter)

export default router