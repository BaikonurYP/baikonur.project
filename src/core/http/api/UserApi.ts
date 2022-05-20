import { BaseApi } from './BaseApi'
import { HTTPMethod } from './types/HTTPTypes'
import { RequestResult } from './types/RequestResult'
import { SwaggerUserInfo } from './types/SwaggerTypes'

/** АПИ работы с профилем пользователя */
export class UserApi extends BaseApi {
    /** Обновить данные юзера */
    updateUser(data: {
        first_name: string
        second_name: string
        display_name: string
        login: string
        email: string
        phone: string
    }): Promise<RequestResult<SwaggerUserInfo>> {
        return this._request<SwaggerUserInfo>(
            'user/profile',
            HTTPMethod.PUT,
            data
        )
    }

    /** Обновить аватар */
    updateAvatar(file: FormData): Promise<RequestResult<SwaggerUserInfo>> {
        return this._request<SwaggerUserInfo>(
            'user/profile/avatar',
            HTTPMethod.PUT,
            file
        )
    }

    /** Обновить пароли */
    updatePassword(data: {
        oldPassword: string
        newPassword: string
    }): Promise<RequestResult<any>> {
        return this._request<SwaggerUserInfo>(
            'user/password',
            HTTPMethod.PUT,
            data
        )
    }
}
