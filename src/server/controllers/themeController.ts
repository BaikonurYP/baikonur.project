import { db } from '../tables'
import { UserThemes } from '../tables/themes'

export const get = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const [userTheme, created] = await db.UserThemes.findOrCreate({
            defaults: {
                name: 'dark',
            },
            where: {
                user_id: id,
            },
        })
        return res.json(userTheme)
    } catch (e) {
        console.log(e)
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.body
        const userTheme = await db.UserThemes.update(
            { name: name },
            { where: { user_id: id } }
        )
        return res.json({ user_id: id, name })
    } catch (e) {
        console.log(e)
    }
}
