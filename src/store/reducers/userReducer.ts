import {
    UserAction,
    UserActionTypes,
    UserState as UserState
} from '../types/userTypes'

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { loading: true, error: null, user: null }
        case UserActionTypes.FETCH_USER_SUCCESS: {
            return { loading: false, error: null, user: action.payload }
        }
        case UserActionTypes.FETCH_USER_ERROR:
            return { loading: false, error: action.payload, user: null }
        default:
            return state
    }
}
