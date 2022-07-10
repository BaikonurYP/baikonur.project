import { HttpCode, HTTPMethod } from './types/HTTPTypes'
import axios, { AxiosRequestConfig } from 'axios'
import { RequestResult } from './types/RequestResult'

/**
 * Параметры запроса
 */
type RequestOptions = {
    /** Таймаут */
    timeout?: number
    /** Тип ответа (по умолчанию - json) */
    responseType?:
        | 'arraybuffer'
        | 'document'
        | 'json'
        | 'text'
        | 'stream'
        | 'blob'
}

/** Базовое API для всех классов */
export class BaseApi {
    BASE_URL: string = 'https://ya-praktikum.tech/api/v2'

    /**
     * Запрос к АПИ
     * @param url Ручка
     * @param method Метод
     * @param data Данные
     * @param options Параметры запроса
     * @returns Промис с данными
     */
    protected request<T>(
        url: string,
        method: HTTPMethod,
        data?:
            | Record<string, string | number | Record<string, string | number>>
            | FormData
            | string
            | number,
        options?: RequestOptions
    ): Promise<RequestResult<T>> {
        let config: AxiosRequestConfig = {
            url: url,
            baseURL: this.BASE_URL,
            method: method,
            withCredentials: true,
        }
        if (data) {
            if (method == HTTPMethod.GET) {
                config.params = data
            } else {
                config.data = data
            }
        }
        if (options) {
            config = { ...config, ...options }
        }
        if (data instanceof FormData) {
            if (!config.headers) config.headers = {}
            config.headers['Content-Type'] = `multipart/form-data`
        }

        const result: RequestResult<T> = {}
        return axios(config)
            .then((response) => {
                result.successes = true
                result.code = response.status
                if (response.data) result.data = response.data
                return result
            })
            .catch((error) => {
                result.successes = false
                if (error.code === 'ECONNABORTED') {
                    result.code = HttpCode.TIMEOUT
                }
                if (error.response) {
                    result.error = error.response.data
                    if (typeof result.error == 'object') {
                        if (result.error.reason)
                            result.error = result.error.reason
                        else result.error = JSON.stringify(result.error)
                    }
                    if (!result.code) result.code = error.response.status
                }
                return result
            })
    }
}
