import { RequestHandler } from 'express'
import cookieParserMiddleware from 'cookie-parser'
import csrfMiddleware from 'csurf'

import { DATA, EVAL, expressCspHeader, INLINE, SELF } from 'express-csp-header'
import { auth } from './authMiddleware'

const cookieParser: RequestHandler = cookieParserMiddleware()
const csrfProtection: RequestHandler = csrfMiddleware({ cookie: true })
const cspHeader: RequestHandler = expressCspHeader({
    directives: {
        'default-src': [SELF, 'https://ya-praktikum.tech'],
        'script-src': [SELF, INLINE, EVAL],
        'font-src': [SELF, DATA],
        'img-src': [DATA, SELF, INLINE, 'https://ya-praktikum.tech'],
        'style-src': [SELF, INLINE],
        'worker-src': [SELF],
    },
})

export const middlewares = [cookieParser, cspHeader, csrfProtection, auth]
