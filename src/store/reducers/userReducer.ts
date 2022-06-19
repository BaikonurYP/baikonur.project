import {
    UserAction,
    UserActionTypes,
    UserState as UserState
} from '../types/userTypes'

const initialState: UserState = {
    user: null,
    loading: false
}

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { ...state, loading: true }
        case UserActionTypes.FETCH_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                user: null
            }

        case UserActionTypes.LOGIN_REQUEST:
            return { ...state, loading: true }
        case UserActionTypes.LOGIN_REQUEST_SUCCESS:
            return { ...state, loading: false }
        case UserActionTypes.LOGIN_REQUEST_ERROR:
            return {
                ...state,
                loading: false
            }

        case UserActionTypes.LOGOUT_REQUEST:
            return { ...state, loading: true }
        case UserActionTypes.LOGOUT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case UserActionTypes.LOGOUT_REQUEST_ERROR:
            return {
                ...state,
                loading: false
            }

        case UserActionTypes.SIGNUP_REQUEST:
            return { ...state, loading: true }
        case UserActionTypes.SIGNUP_REQUEST_SUCCESS:
            return { ...state, loading: false }
        case UserActionTypes.SIGNUP_REQUEST_ERROR:
            return {
                ...state,
                loading: false
            }

        case UserActionTypes.CHANGE_DATA_REQUEST:
            return { ...state, loading: true }
        case UserActionTypes.CHANGE_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user
            }
        case UserActionTypes.CHANGE_DATA_REQUEST_ERROR:
            return {
                ...state,
                loading: false
            }

        case UserActionTypes.CHANGE_PASSWORDS_REQUEST:
            return { ...state, loading: true }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case UserActionTypes.CHANGE_PASSWORDS_REQUEST_ERROR:
            return {
                ...state,
                loading: false
            }

        case UserActionTypes.CHANGE_AVATAR_REQUEST:
            return { ...state, loading: true }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,

                user: action.payload.user
            }
        case UserActionTypes.CHANGE_AVATAR_REQUEST_ERROR:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}
