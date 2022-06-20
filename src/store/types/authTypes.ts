export interface AuthState {
    isAuth: boolean
    loading: boolean
    error: null | string
}

export enum AuthActionTypes {
    CHANGE_AUTH = 'CHANGE_AUTH',
    CHANGE_AUTH_SUCCESS = 'CHANGE_AUTH_SUCCESS',
    CHANGE_AUTH_ERROR = 'CHANGE_AUTH_ERROR',
}

interface ChangeAuthAction {
    type: AuthActionTypes.CHANGE_AUTH
}
interface ChangeAuthSuccessAction {
    type: AuthActionTypes.CHANGE_AUTH_SUCCESS
    payload: boolean
}
interface ChangeAuthErrorAction {
    type: AuthActionTypes.CHANGE_AUTH_ERROR
    payload: string
}
export type AuthAction =
    | ChangeAuthAction
    | ChangeAuthSuccessAction
    | ChangeAuthErrorAction
