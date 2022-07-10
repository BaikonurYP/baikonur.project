import { Request, Response, NextFunction } from 'express'

import { authApi } from '../../core/http/api/AuthApi'
import { themeApi } from '../../core/http/api/ThemeApi'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    res.locals.user = undefined

    try {
        const { data } = await authApi.user({
            headers: { cookie: req.headers.cookie! },
        })
        res.locals.user = { user: data, loading: false }
        if (data.id) {
            res.locals.auth = { isAuth: true, loading: false, error: null }
            const { data: theme } = await themeApi.get(data.id)
            res.locals.theme = theme
        }
    } catch (error: unknown) {
        res.locals.error = error
    } finally {
        next()
    }
}
