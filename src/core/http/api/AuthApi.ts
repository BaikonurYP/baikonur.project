import { AxiosRequestConfig } from 'axios'
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
        return this.request<{ id: number }>(
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
        return this.request<string>('auth/signin', HTTPMethod.POST, data)
    }

    /** Получить текущего юзера */
    user(options?: AxiosRequestConfig | undefined): Promise<RequestResult<SwaggerUserInfo>> {
        return this.request<SwaggerUserInfo>('auth/user', HTTPMethod.GET, {} ,{ ...options })
    }

    /** Выход */
    logout(): Promise<RequestResult<any>> {
        return this.request<string>('auth/logout', HTTPMethod.POST)
    }

    /** Получить service_id для OAuth от яндекса */
    getOAuthId(): Promise<RequestResult<{ service_id: string }>> {
        return this.request<{ service_id: string }>(
            `oauth/yandex/service-id`,
            HTTPMethod.GET,
            { redirect_uri: window.location.origin }
        )
    }

    /** Получить access_token для авторизации на яндексе */
    oAuth(data: { code: string }): Promise<RequestResult<string>> {
        return this.request<string>('oauth/yandex', HTTPMethod.POST, {
            code: data.code,
            redirect_uri: window.location.origin,
        })
    }
}

export const authApi = new AuthApi()
