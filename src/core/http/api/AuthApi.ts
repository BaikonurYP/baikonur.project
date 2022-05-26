import { BaseApi } from './BaseApi'
import { HTTPMethod } from './types/HTTPTypes'
import { RequestResult } from './types/RequestResult'
import { SwaggerUserInfo } from './types/SwaggerTypes'

/** АПИ для работы с авторизацией */
class AuthApi extends BaseApi {
    /**
     * Регистрация
     * @param data Регистрационные данные
     */
    signUp(data: {
        first_name: string
        second_name: string
        login: string
        email: string
        password: string
        phone: string
    }): Promise<RequestResult<{ id: number }>> {
        return this._request<{ id: number }>(
            'auth/signup',
            HTTPMethod.POST,
            data
        )
    }

    /**
     * Авторизация
     * @param data Данные для входа
     */
    signIn(data: {
        login: string
        password: string
    }): Promise<RequestResult<string>> {
        return this._request<string>('auth/signin', HTTPMethod.POST, data)
    }

    /** Получить текущего юзера */
    user(): Promise<RequestResult<SwaggerUserInfo>> {
        return this._request<SwaggerUserInfo>('auth/user', HTTPMethod.GET)
    }

    /** Выход */
    logout(): Promise<RequestResult<any>> {
        return this._request<string>('auth/logout', HTTPMethod.POST)
    }
}

export const authApi = new AuthApi();