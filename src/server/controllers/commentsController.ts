import { db } from '../tables'

export const create = async (req: Request, res: Response, next: any) => {
    try {
        const comment = await db.Comments.create(req.body)
        return res.json(comment)
    } catch (e) {
        next(e)
    }
}

export const getByTopicId = async (req: Request, res: Response, next: any) => {
    try {
        const { id } = req.params
        const comment = await db.Comments.findAll({
            where: {
                topic_id: id,
            },
        })
        // @ts-ignore
        return res.json(comment)
    } catch (e) {
        next(e)
    }
}
