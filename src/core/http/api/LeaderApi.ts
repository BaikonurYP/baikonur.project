import { BaseApi } from './BaseApi'
import { HTTPMethod } from './types/HTTPTypes'
import { RequestResult } from './types/RequestResult'

class LeaderApi extends BaseApi {
    /**
     * Сохранить новый счет пользователя
     * @param data Данные пользователя
     */
    saveLeaderData(data: {
        id?: number
        login: string
        name?: string
        baikonurScore: number
        avatar?: string
    }): Promise<RequestResult<string>> {
        return this.request<string>('leaderboard', HTTPMethod.POST, {
            data,
            ratingFieldName: 'baikonurScore',
        })
    }

    /**
     * Получить список лидеров
     * @param count Количество лидеров
     */
    fetchLeaders(count: number): Promise<RequestResult<string>> {
        return this.request<string>('leaderboard/all', HTTPMethod.POST, {
            ratingFieldName: 'baikonurScore',
            cursor: 0,
            limit: count,
        })
    }
}

export default new LeaderApi()
