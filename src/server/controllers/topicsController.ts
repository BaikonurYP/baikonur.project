import { db } from '../tables'

export const create = async (req: Request, res: Response) => {
    try {
        const topic = await db.Topics.create(req.body)
        return res.json(topic)
    } catch (e) {
        console.log(e)
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const comment = await db.Topics.findAll()
        return res.json(comment)
    } catch (e) {
        console.log(e)
    }
}
