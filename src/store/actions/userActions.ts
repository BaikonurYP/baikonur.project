import { User, UserActionTypes } from '../types/userTypes'

export const fetchUser = () => ({
    type: UserActionTypes.FETCH_USER,
})
export const fetchUserSuccess = (payload: User) => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload,
})
export const fetchUserError = (payload: string) => ({
    type: UserActionTypes.FETCH_USER_ERROR,
    payload,
})

export const login = (payload: { login: string; password: string }) => ({
    type: UserActionTypes.LOGIN_REQUEST,
    payload,
})
export const loginSuccess = () => ({
    type: UserActionTypes.LOGIN_REQUEST_SUCCESS,
})
export const loginError = (payload: string) => ({
    type: UserActionTypes.LOGIN_REQUEST_ERROR,
    payload,
})

export const logOut = () => ({
    type: UserActionTypes.LOGOUT_REQUEST,
})
export const logOutSuccess = (payload: null) => ({
    type: UserActionTypes.LOGOUT_REQUEST_SUCCESS,
    payload,
})
export const logOutError = (payload: string) => ({
    type: UserActionTypes.LOGOUT_REQUEST_ERROR,
    payload,
})

export const signUp = (payload: {
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    phone: string
}) => ({
    type: UserActionTypes.SIGNUP_REQUEST,
    payload,
})
export const signUpSuccess = () => ({
    type: UserActionTypes.SIGNUP_REQUEST_SUCCESS,
})
export const signUpError = (payload: string) => ({
    type: UserActionTypes.SIGNUP_REQUEST_ERROR,
    payload,
})

export const oAuthAccess = () => ({
    type: UserActionTypes.OAUTH_ACCESS,
})
export const oAuthRequest = (payload: string) => ({
    type: UserActionTypes.OAUTH_REQUEST,
    payload,
})

export const changeData = (payload: Omit<User, 'id' | 'avatar'>) => ({
    type: UserActionTypes.CHANGE_DATA_REQUEST,
    payload,
})
export const changeDataSuccess = (payload: User) => ({
    type: UserActionTypes.CHANGE_DATA_REQUEST_SUCCESS,
    payload,
})
export const changeDataError = (payload: string) => ({
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST_ERROR,
    payload,
})

export const changePasswords = (payload: {
    oldPassword: string
    newPassword: string
}) => ({
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST,
    payload,
})
export const changePasswordsSuccess = () => ({
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST_SUCCESS,
})
export const changePasswordsError = (payload: string) => ({
    type: UserActionTypes.CHANGE_PASSWORDS_REQUEST_ERROR,
    payload,
})

export const changeAvatar = (payload: FormData) => ({
    type: UserActionTypes.CHANGE_AVATAR_REQUEST,
    payload,
})
export const changeAvatarSuccess = (payload: User) => ({
    type: UserActionTypes.CHANGE_AVATAR_REQUEST_SUCCESS,
    payload,
})
export const changeAvatarError = (payload: string) => ({
    type: UserActionTypes.CHANGE_AVATAR_REQUEST_ERROR,
    payload,
})
