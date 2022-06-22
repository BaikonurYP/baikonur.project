import { Comments } from '../tables/comments'

export const create = async (req: Request, res: Response) => {
    const comment = await Comments.create(req.body)
    return res.json(comment)
}

export const show = async (req: Request, res: Response) => {
    const comment = await Comments.findAll()
    return res.json(comment)
}

export const getByTopicId = async (req: Request, res: Response) => {
    return res.json({})
}
