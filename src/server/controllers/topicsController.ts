import { db } from '../tables'

export const create = async (req: Request, res: Response, next: any) => {
    try {
        console.log(req)
        const topic = await db.Topics.create(req.body)
        return res.json(topic)
    } catch (e) {
        next(e);
    }
}

export const getAll = async (req: Request, res: Response, next: any) => {
    try {
        const comment = await db.Topics.findAll()
        // @ts-ignore
        return res.json(comment)
    } catch (e) {
        next(e);
    }
}