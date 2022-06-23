import { BaseApi } from './BaseApi'
import { HTTPMethod } from './types/HTTPTypes'
import { RequestResult } from './types/RequestResult'
import { SwaggerCommentsInfo } from './types/SwaggerTypes'

/** АПИ для работы с комментраиями */
class CommentsApi extends BaseApi {

    constructor() {
        super();
        this.BASE_URL = 'http://localhost:3000/'
    }

    /**
     * Создание комментария
     * @param data Данные комментария
     */
    create(data: {
        topic_id: number
        message: string
        user_id: number
        user_name: string
        user_avatar: string
        date: string
        createdAt: string
        updatedAt: string
    }): Promise<RequestResult<string>> {
        return this.request<string>(
            'api/comments/',
            HTTPMethod.POST,
            data
        )
    }

    /**
     * Список всех коммеентариев данного топика
     * @param data ID топика
     */
    getAll(
        id: number
    ): Promise<RequestResult<SwaggerCommentsInfo>> {
        console.log(id)
        return this.request<SwaggerCommentsInfo>(`api/comments/topics/${id}`, HTTPMethod.GET)
    }
}

export const commentsApi = new CommentsApi()
