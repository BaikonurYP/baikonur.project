import { AuthAction, AuthActionTypes, AuthState } from '../types/authTypes'

const initialState: AuthState = {
    isAuth: false,
    loading: false,
    error: null
}

export const authReducer = (
    state = initialState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case AuthActionTypes.CHANGE_AUTH:
            return { loading: true, error: null, isAuth: false }

        case AuthActionTypes.CHANGE_AUTH_SUCCESS: {
            return { loading: false, error: null, isAuth: action.payload }
        }

        case AuthActionTypes.CHANGE_AUTH_ERROR:
            return { loading: false, error: action.payload, isAuth: false }

        default:
            return state
    }
}
