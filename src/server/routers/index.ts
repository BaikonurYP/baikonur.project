import commentsRouter from './commentsRouter'

const Router = require('express')

const router = Router()

router.use('/comments', commentsRouter)

export default router