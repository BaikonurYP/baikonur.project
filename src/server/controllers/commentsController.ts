import { db } from '../tables'
import { sequelize } from '../../../index';

export const create = async (req: Request, res: Response) => {

    const comment = await db.Comments.create(req.body)
    return res.json(comment)
}

export const show = async (req: Request, res: Response, next: any) => {
    try {
        const comment = await db.Comments.findAll()
        // @ts-ignore
        return res.json(comment)
    } catch (e) {
        next(e);
    }
}

export const getByTopicId = async (req: Request, res: Response) => {
    return res.json({})
}
