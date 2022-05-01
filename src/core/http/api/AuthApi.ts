import { BaseApi } from './BaseApi'
import { HTTPMethod } from './types/HTTPTypes'
import { RequestResult } from './types/RequestResult'
import { SwaggerUserInfo } from './types/SwaggerTypes'

export class AuthApi extends BaseApi {
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
    }): Promise<{ id: number }> {
        return this._request<{ id: number }>(
            'auth/signup',
            HTTPMethod.POST,
            data
        ).then((result) => result.data)
    }

    /**
     * Авторизация
     * @param data Данные для входа
     */
    signIn(data: { login: string; password: string }): Promise<string> {
        return this._request<string>('auth/signin', HTTPMethod.POST, data).then(
            (result) => result.data
        )
    }

    /** Получить текущего юзера */
    user(): Promise<SwaggerUserInfo> {
        return this._request<SwaggerUserInfo>('auth/user', HTTPMethod.GET).then(
            (result) => result.data
        )
    }

    /** Выход */
    logout(): Promise<any> {
        return this._request<string>('auth/logout', HTTPMethod.POST).then(
            (result) => result.data
        )
    }
}
