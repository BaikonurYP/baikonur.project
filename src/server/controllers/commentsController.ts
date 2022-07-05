import { db } from '../tables'

export const create = async (req: Request, res: Response) => {
    try {
        const comment = await db.Comments.create(req.body)
        return res.json(comment)
    } catch (e) {
        console.log(e)
    }
}

export const getByTopicId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const comment = await db.Comments.findAll({
            where: {
                topic_id: id,
            },
        })
        return res.json(comment)
    } catch (e) {
        console.log(e)
    }
}
