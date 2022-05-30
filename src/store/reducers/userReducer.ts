import {
    UserAction,
    UserActionTypes,
    UserState as UserState
} from '../types/userTypes'

const initialState: UserState = {
    user: null,
    loading: false,
    getMessage: null,
    loginMessage: null,
    registerMessage: null,
    changeDataMessage: null,
    changePasswordsMessage: null,
    changeAvatarMessage: null
}

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { ...state, loading: true, getMessage: null }
        case UserActionTypes.FETCH_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload,
                getMessage: null
            }
        }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                getMessage: action.payload
            }

        case UserActionTypes.LOGIN_REQUEST:
            return { ...state, loading: true, loginMessage: null }
        case UserActionTypes.LOGIN_REQUEST_SUCCESS:
            return { ...state, loading: false, loginMessage: null }
        case UserActionTypes.LOGIN_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                loginMessage: { text: action.payload, type: 'danger' }
            }
        case UserActionTypes.LOGIN_REQUEST_COMLETE:
            return { ...state, loading: false, loginMessage: null }

        case UserActionTypes.SIGNUP_REQUEST:
            return { ...state, loading: true, registerMessage: null }
        case UserActionTypes.SIGNUP_REQUEST_SUCCESS:
            return { ...state, loading: false, registerMessage: null }
        case UserActionTypes.SIGNUP_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                registerMessage: { text: action.payload, type: 'danger' }
            }
        case UserActionTypes.SIGNUP_REQUEST_COMPLETE:
            return { ...state, loading: false, registerMessage: null }

        case UserActionTypes.CHANGE_DATA_REQUEST:
            return { ...state, loading: true, changeDataMessage: null }
        case UserActionTypes.CHANGE_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                changeDataMessage: {
                    text: 'Данные успешно сохранены',
                    type: 'default'
                },
                user: action.payload.user
            }
        case UserActionTypes.CHANGE_DATA_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                changeDataMessage: { text: action.payload, type: 'default' }
            }
        case UserActionTypes.CHANGE_DATA_REQUEST_COMPLETE:
            return {
                ...state,
                loading: true,
                changeDataMessage: null
            }

        case UserActionTypes.CHANGE_PASSWORDS_REQUEST:
            return { ...state, loading: true, changePasswordsMessage: null }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                changePasswordsMessage: {
                    text: 'Пароль успешно обновлен',
                    type: 'default'
                }
            }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                changePasswordsMessage: {
                    text: action.payload,
                    type: 'danger'
                }
            }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_COMPLETE:
            return {
                ...state,
                loading: true,
                changePasswordsMessage: null
            }

        case UserActionTypes.CHANGE_AVATAR_REQUEST:
            return { ...state, loading: true, changeAvatarMessage: null }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                changeAvatarMessage: {
                    text: 'Пароль успешно обновлен',
                    type: 'default'
                },
                user: action.payload.user
            }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                changeAvatarMessage: { text: action.payload, type: 'danger' }
            }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_COMPLETE:
            return {
                ...state,
                loading: true,
                changeAvatarMessage: null
            }

        default:
            return state
    }
}
