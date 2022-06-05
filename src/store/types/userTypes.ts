import { SwaggerUserInfo } from '../../core/http/api/types/SwaggerTypes'

export type User = SwaggerUserInfo

export type UserMessage = { text: string; type: 'default' | 'danger' }

export interface UserState {
    user: User
    loading: boolean
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',

    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS',
    LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR',

    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS',
    SIGNUP_REQUEST_ERROR = 'SIGNUP_REQUEST_ERROR',

    OAUTH_ACCESS = 'OAUTH_ACCESS',
    OAUTH_REQUEST = 'OAUTH_REQUEST',

    CHANGE_DATA_REQUEST = 'CHANGE_DATA_REQUEST',
    CHANGE_DATA_REQUEST_SUCCESS = 'CHANGE_DATA_REQUEST_SUCCESS',
    CHANGE_DATA_REQUEST_ERROR = 'CHANGE_DATA_REQUEST_ERROR',

    CHANGE_PASSWORDS_REQUEST = 'CHANGE_PASSWORDS_REQUEST',
    CHANGE_PASSWORDS_REQUEST_SUCCESS = 'CHANGE_PASSWORDS_REQUEST_SUCCESS',
    CHANGE_PASSWORDS_REQUEST_ERROR = 'CHANGE_PASSWORDS_REQUEST_ERROR',

    CHANGE_AVATAR_REQUEST = 'CHANGE_AVATAR_REQUEST',
    CHANGE_AVATAR_REQUEST_SUCCESS = 'CHANGE_AVATAR_REQUEST_SUCCESS',
    CHANGE_AVATAR_REQUEST_ERROR = 'CHANGE_AVATAR_REQUEST_ERROR'
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: User
}

export interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: UserMessage
}

export interface LoginAction {
    type: UserActionTypes.LOGIN_REQUEST
    payload: { login: string; password: string }
}

export interface LoginSuccessAction {
    type: UserActionTypes.LOGIN_REQUEST_SUCCESS
}

export interface LoginErrorAction {
    type: UserActionTypes.LOGIN_REQUEST_ERROR
    payload: string
}

export interface SignUpAction {
    type: UserActionTypes.SIGNUP_REQUEST
    payload: {
        first_name: string
        second_name: string
        login: string
        email: string
        password: string
        phone: string
    }
}

export interface SignUpSuccessAction {
    type: UserActionTypes.SIGNUP_REQUEST_SUCCESS
}

export interface SignUpErrorAction {
    type: UserActionTypes.SIGNUP_REQUEST_ERROR
    payload: string
}

export interface OAuthAction {
    type: UserActionTypes.OAUTH_ACCESS
    payload: string
}

export interface ChangeDataAction {
    type: UserActionTypes.CHANGE_DATA_REQUEST
    payload: Omit<User, 'id' | 'avatar'>
}

export interface ChangeDataSuccessAction {
    type: UserActionTypes.CHANGE_DATA_REQUEST_SUCCESS
    payload: { user: User; message: string }
}

export interface ChangeDataErrorAction {
    type: UserActionTypes.CHANGE_DATA_REQUEST_ERROR
    payload: string
}

export interface ChangePasswordsAction {
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST
    payload: { oldPassword: string; newPassword: string }
}

export interface ChangePasswordsSuccessAction {
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST_SUCCESS
    payload: string
}

export interface ChangePasswordsErrorAction {
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST_ERROR
    payload: string
}

export interface ChangeAvatarAction {
    type: UserActionTypes.CHANGE_AVATAR_REQUEST
    payload: FormData
}

export interface ChangeAvatarSuccessAction {
    type: UserActionTypes.CHANGE_AVATAR_REQUEST_SUCCESS
    payload: { user: User; message: string }
}

export interface ChangeAvatarErrorAction {
    type: UserActionTypes.CHANGE_AVATAR_REQUEST_ERROR
    payload: string
}

export type UserAction =
    | FetchUserAction
    | FetchUserSuccessAction
    | FetchUserErrorAction
    | LoginAction
    | LoginSuccessAction
    | LoginErrorAction
    | SignUpAction
    | SignUpSuccessAction
    | SignUpErrorAction
    | OAuthAction
    | ChangeDataAction
    | ChangeDataSuccessAction
    | ChangeDataErrorAction
    | ChangePasswordsAction
    | ChangePasswordsSuccessAction
    | ChangePasswordsErrorAction
    | ChangeAvatarAction
    | ChangeAvatarSuccessAction
    | ChangeAvatarErrorAction
