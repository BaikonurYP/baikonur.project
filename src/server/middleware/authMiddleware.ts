import { Request, Response, NextFunction } from 'express'

import { authApi } from '../../core/http/api/AuthApi'

export const auth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.locals.user = undefined

    try {
        const { data } = await authApi.user({
            headers: { cookie: req.headers.cookie! },
        })
        res.locals.user = data
    } catch (error: unknown) {
        res.locals.error = error
    } finally {
        next()
    }
}
