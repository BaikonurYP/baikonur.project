import {
    UserAction,
    UserActionTypes,
    UserState as UserState
} from '../types/userTypes'

const initialState: UserState = {
    user: null,
    loading: false,
    get_message: null,
    login_message: null,
    register_message: null,
    change_data_message: null,
    change_passwords_message: null,
    change_avatar_message: null
}

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { ...state, loading: true, get_message: null }
        case UserActionTypes.FETCH_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload,
                get_message: null
            }
        }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                get_message: action.payload
            }

        case UserActionTypes.LOGIN_REQUEST:
            return { ...state, loading: true, login_message: null }
        case UserActionTypes.LOGIN_REQUEST_SUCCESS:
            return { ...state, loading: false, login_message: null }
        case UserActionTypes.LOGIN_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                login_message: { text: action.payload, type: 'danger' }
            }
        case UserActionTypes.LOGIN_REQUEST_COMLETE:
            return { ...state, loading: false, login_message: null }

        case UserActionTypes.SIGNUP_REQUEST:
            return { ...state, loading: true, register_message: null }
        case UserActionTypes.SIGNUP_REQUEST_SUCCESS:
            return { ...state, loading: false, register_message: null }
        case UserActionTypes.SIGNUP_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                register_message: { text: action.payload, type: 'danger' }
            }
        case UserActionTypes.SIGNUP_REQUEST_COMPLETE:
            return { ...state, loading: false, register_message: null }

        case UserActionTypes.CHANGE_DATA_REQUEST:
            return { ...state, loading: true, change_data_message: null }
        case UserActionTypes.CHANGE_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                change_data_message: {
                    text: 'Данные успешно сохранены',
                    type: 'default'
                },
                user: action.payload.user
            }
        case UserActionTypes.CHANGE_DATA_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                change_data_message: { text: action.payload, type: 'default' }
            }
        case UserActionTypes.CHANGE_DATA_REQUEST_COMPLETE:
            return {
                ...state,
                loading: true,
                change_data_message: null
            }

        case UserActionTypes.CHANGE_PASSWORDS_REQUEST:
            return { ...state, loading: true, change_passwords_message: null }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                change_passwords_message: {
                    text: 'Пароль успешно обновлен',
                    type: 'default'
                }
            }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                change_passwords_message: {
                    text: action.payload,
                    type: 'danger'
                }
            }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_COMPLETE:
            return {
                ...state,
                loading: true,
                change_passwords_message: null
            }

        case UserActionTypes.CHANGE_AVATAR_REQUEST:
            return { ...state, loading: true, change_avatar_message: null }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                change_avatar_message: {
                    text: 'Пароль успешно обновлен',
                    type: 'default'
                },
                user: action.payload.user
            }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                change_avatar_message: { text: action.payload, type: 'danger' }
            }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_COMPLETE:
            return {
                ...state,
                loading: true,
                change_avatar_message: null
            }

        default:
            return state
    }
}
