import React from 'react'
import { BaseApi } from './BaseApi'
import { HTTPMethod } from './types/HTTPTypes'
import { RequestResult } from './types/RequestResult'
import { UserThemes } from '../../../server/tables/themes'

/** АПИ для работы с темой */
class ThemeApi extends BaseApi {
    constructor(url: string) {
        super()
        this.BASE_URL = url
    }

    /**
     * Выбор темы для данного пользователя комментария
     * @param data ID пользователя
     */
    get(id: number): Promise<RequestResult<string>> {
        return this.request<string>(`api/theme/${id}/`, HTTPMethod.GET)
    }

    /**
     * Список всех коммеентариев данного топика
     * @param data ID топика
     */
    update(data: {
        id: number
        name: string
    }): Promise<RequestResult<UserThemes>> {
        return this.request<UserThemes>(`api/theme/`, HTTPMethod.PATCH, data)
    }
}

export const themeApi = new ThemeApi(process.env.REACT_APP_API_URL)
